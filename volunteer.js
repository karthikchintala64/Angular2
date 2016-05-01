System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Volunteer;
    return {
        setters:[],
        execute: function() {
            Volunteer = (function () {
                function Volunteer(Name, Agency, Date, VolunteerHours, Notes) {
                    this.Name = Name;
                    this.Agency = Agency;
                    this.Date = Date;
                    this.VolunteerHours = VolunteerHours;
                    this.Notes = Notes;
                }
                return Volunteer;
            }());
            exports_1("Volunteer", Volunteer);
        }
    }
});
//# sourceMappingURL=volunteer.js.map