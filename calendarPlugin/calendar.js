   
   class Calendar{
    constructor(params){
        if(params.element.nodeType && params.element.tagName == "INPUT")
        { 
            this.element = params.element;
        }
        else{
            throw "Paramater element should be a valid html input";
        }
        
        this.element.setAttribute("readonly", true);
        this.disabledDays =  (typeof params.disabledDays !== 'undefined') ? params.disabledDays : [];
        this.width =  (typeof params.width !== 'undefined' && params.width > 300) ? params.width : 300;
        this.height =  (typeof params.height !== 'undefined' && params.height > 275) ? params.height : 275;
        this.dayNames = (typeof params.dayNames !== 'undefined') ? params.dayNames : ["Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt", "Pzr"];
        this.dateSeparator =  (typeof params.dateSeparator  !== 'undefined') ? params.dateSeparator : "/";
        this.selectedDay = null;
        this.selectedMonth = null;
        this.selectedYear = null;
        this.returnCurrentTime();
        this.calenderElement = null;
        this.initializeEvents();
    }
    initializeEvents(){
        this.element.addEventListener("focus", ()=>{
            this.createCalendarBox();
        });
        this.element.addEventListener("blur", (event)=>{
            if(event.relatedTarget == this.calendarElement) return;
            if(this.calendarElement.parentNode)
            {
                document.getElementsByTagName("body")[0].removeChild(this.calendarElement)
            }
                
        });
    }

    returnCurrentTime(){
        let currentDate = new Date();
        this.selectedDay = currentDate.getDate();
        this.selectedMonth = currentDate.getMonth() + 1;
        this.selectedYear = currentDate.getFullYear();
    }
    showSelectedDate(){
        let month = (this.selectedMonth < 10)? "0" + this.selectedMonth : this.selectedMonth;
        let day = (this.selectedDay < 10)? "0" + this.selectedDay : this.selectedDay;
        return day + this.dateSeparator + month + this.dateSeparator + this.selectedYear;
    }
    createTopNavBar(){
        var calendarTopNavbar = document.createElement("div");
        calendarTopNavbar.className = "calendar-top-navbar";

        var calendarTopNavbarPrevBtn = document.createElement("div");
        calendarTopNavbarPrevBtn.className = "calendar-top-navbar-btn prev";
        calendarTopNavbarPrevBtn.innerText = "<";
        calendarTopNavbarPrevBtn.addEventListener("click", (e)=> this.prevMonth());
        

        var calendarTopNavbarSelectedDate = document.createElement("div");
        calendarTopNavbarSelectedDate.className = "calendar-top-navbar-selected-date";
        calendarTopNavbarSelectedDate.innerText = `${this.showSelectedDate()}`;
        
        var calendarTopNavbarNextBtn = document.createElement("div");
        calendarTopNavbarNextBtn.className = "calendar-top-navbar-btn next";
        calendarTopNavbarNextBtn.innerText = ">";
        calendarTopNavbarNextBtn.addEventListener("click", (e)=> this.nextMonth());

        calendarTopNavbar.appendChild(calendarTopNavbarPrevBtn);
        calendarTopNavbar.appendChild(calendarTopNavbarSelectedDate);
        calendarTopNavbar.appendChild(calendarTopNavbarNextBtn);

        
        return calendarTopNavbar;
    }
    dayOfWeeks(){
        let calenderDayOfWeeksWrapper = document.createElement("div");
        calenderDayOfWeeksWrapper.className = "calendar-day-of-weeks-wrapper";
        for(let i = 0; i < 7; i++){
            let element = document.createElement("div");
            element.className = "calendar-day-of-weeks";
            element.innerText = this.dayNames[i];
            calenderDayOfWeeksWrapper.appendChild(element);
        }
        return calenderDayOfWeeksWrapper;
    }
    createCalendarBox(){
        var offsetX = this.element.offsetLeft;
        var offsetY = this.element.offsetTop + this.element.offsetHeight;
        var container = document.createElement("div");
        container.setAttribute("tabIndex", "0");
        container.style= ` outline:none; background-color:#ccc; color:black;  width:${this.width}px; height:${this.height}px; position: absolute; left:${offsetX}px; top:${offsetY}px; display:flex; flex-direction: column; z-index:4444; `;
        document.getElementsByTagName("body")[0].appendChild(container); 
        container.appendChild(this.createTopNavBar());
        container.appendChild(this.dayOfWeeks());
        this.element.value = this.showSelectedDate();
        this.clearInputIfDayIsNotAvailable();
        
        this.calendarElement = container;
        container.addEventListener("blur", ()=> {
            if(this.calendarElement.parentNode)
            {
                document.getElementsByTagName("body")[0].removeChild(this.calendarElement)
            }
        });
        
        
        
        this.calendarElement.appendChild(this.renderDates());
        
        return container;
    }
    renderDates(){

        let calendarDayWrapper = document.createElement("div");
        calendarDayWrapper.className = "calendar-day-wrapper";
        let prevMonthDates = this.prevMonthDates();
        let currentMonthDates = this.currentMonthDates();
        let nextMonthDates = this.nextMonthDates(prevMonthDates.length, currentMonthDates.length);
        prevMonthDates.forEach(day=>{
            let element = document.createElement("div");
            element.className = "calendar-day calendar-day-disabled";
            element.innerText = day;
            calendarDayWrapper.appendChild(element);

        })
        currentMonthDates.forEach(day=>{
            let element = document.createElement("div");
            element.className = "calendar-day";
            let disabled = false;
            this.disabledDays.forEach(date=>{
                if(day == date[0] &&this.selectedMonth == date[1] && this.selectedYear == date[2])
                {   
                    disabled = true;
                    return;
                }
            });
            if(disabled)
            {
                element.className +=" calendar-day-disabled";
            }
            else if(day == this.selectedDay)
            {
                element.className += " calendar-day-selected";
                
            }
            if(!disabled) element.addEventListener("click", ()=>this.selectDate(day));
            element.innerText = day;
            calendarDayWrapper.appendChild(element);
            
        })
        nextMonthDates.forEach(day=>{
            let element = document.createElement("div");
            element.className = "calendar-day calendar-day-disabled";
            element.innerText = day;
            calendarDayWrapper.appendChild(element);
        })
        return calendarDayWrapper
    }
    prevMonthDates(staDay = 0){
        const ret = [];
        const firstWeekday = new Date(this.selectedYear, this.selectedMonth-1, 1).getDay();
        const days = (firstWeekday + 7) - (staDay +7) - 1;
        for (let i = days * -1; i < 0; i++) {
            ret.push(new Date(this.selectedYear, this.selectedMonth, i).getDate());
        }
        return ret;
    }
    currentMonthDates(){
        const ret = [];
        const lastDay = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
        for (let i = 1; i <= lastDay; i++) ret.push(i);
        return ret;
    }
    nextMonthDates(prev, current){
        const ret = [];
        const days = 42 - (prev + current);
        for (let i = 1; i <= days; i++)
        {
            ret.push(i);   
        }
        return ret;
    }
    selectDate(day){
        this.selectedDay = day;
        this.renderAgain();
        this.calendarElement.focus();
    }
    renderAgain(){
        this.calendarElement.blur()
        this.createCalendarBox();
    }
    nextMonth(){
        this.selectedMonth++;
        const lastDay = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
        if(this.selectedDay > lastDay) this.selectedDay = lastDay;
        if(this.selectedMonth > 12)
        {
            this.selectedMonth = 1;
            this.selectedYear++;
        }
        this.renderAgain();
        this.calendarElement.focus();
    }
    clearInputIfDayIsNotAvailable()
    {   
        this.disabledDays.forEach(date=>{
            if(this.selectedDay == date[0] &&this.selectedMonth == date[1] && this.selectedYear == date[2])
                this.element.value = "";
        });
    }
    prevMonth(){
        this.selectedMonth--;
        const lastDay = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
        if(this.selectedDay > lastDay) this.selectedDay = lastDay;
        if(this.selectedMonth < 1){
            this.selectedMonth = 12;
            this.selectedYear--;
        }
        this.renderAgain();
        this.calendarElement.focus();
    }
}