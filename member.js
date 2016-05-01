System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Member, Contact;
    return {
        setters:[],
        execute: function() {
            Member = (function () {
                function Member(FirstName, MiddleName, LastName, Title, Agency, Ethnicity, Code, Standing) {
                    this.FirstName = FirstName;
                    this.MiddleName = MiddleName;
                    this.LastName = LastName;
                    this.Title = Title;
                    this.Agency = Agency;
                    this.Ethnicity = Ethnicity;
                    this.Code = Code;
                    this.Standing = Standing;
                }
                return Member;
            }());
            exports_1("Member", Member);
            Contact = (function () {
                function Contact(Address1, Address2, City, State, ZipCode, Phone, Ext, Fax, Email, Website) {
                    this.Address1 = Address1;
                    this.Address2 = Address2;
                    this.City = City;
                    this.State = State;
                    this.ZipCode = ZipCode;
                    this.Phone = Phone;
                    this.Ext = Ext;
                    this.Fax = Fax;
                    this.Email = Email;
                    this.Website = Website;
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
        }
    }
});
//# sourceMappingURL=member.js.map