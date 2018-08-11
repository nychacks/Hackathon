// delete existing css
let linktags = document.getElementsByTagName("link"), index;
for (index=linktags.length - 1; index >= 0; index--) {
    linktags[index].parentNode.removeChild(linktags[index]);
}


// inject meta tags into head
document.head.innerHTML += "<meta charset=\"utf-8\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n";


// delete the top part
var toppart = document.getElementById('pthdr2container');
toppart.parentNode.removeChild(toppart);


// yeet together the base
document.body.innerHTML += "<span id=\"thebase\"></span>";
var base = document.getElementById("thebase");



// yeet the nav
base.innerHTML += "<nav class=\"navbar navbar-dark navbar-expand-lg bg-primary\"><a class=\"navbar-brand\" href=\"#\">Stony Brook University</a>\n" +
    "  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
    "    <span class=\"navbar-toggler-icon\"></span>\n" +
    "  </button>\n" +
    "  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n" +
    "    <div class=\"navbar-nav\">\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Share My Information</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">SB Alert Emergency Information</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\">SB Alert - Registration</a>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Security and Personal Data</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\"> Change My Solar Password</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">NetID Maintenance</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Whom to Contact if I am Missing</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">User Preferences</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">My Personalizations</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Addresses</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Ethnicity</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Disability</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Veteran Status</a>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Elections</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Student Elections</a>\n" +
    "</div>\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Student Records and Registrations</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Enrollment/Degree Verification</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Academic Planning</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Enrollment</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Academic Records</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">DEgree Progress/Graduation</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Excelsior Cert Summary</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Guide Mobile App</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">TAP Certification Summary</a>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Campus Financial Services</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Account Information/Payment</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Financial Aid</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Required Health Insureance/Waiver</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Set Billing Notification Email</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Pay Petitions</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Manage My Bank Accounts</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Enroll in Direct Deposit</a>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Campus Housing</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Continuing Room Deposit</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Graduate/Family Apt. Deposit</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Summer Room Payment</a>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    " <button type=\"button\" class=\"btn btn-danger\">Student Exmployment Service</button>\n" +
    " <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "   <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    " </button>\n" +
    " <div class=\"dropdown-menu\">\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Enter timesheet</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Timesheet Paid</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Find My NYS Emplid</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">NYS Payroll Online</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
    "   <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
    "\n" +
    "\n" +
    "</div>"+
    "      <a class=\"nav-item nav-link active\" href=\"https://psns.cc.stonybrook.edu/psp/csprods/EMPLOYEE/CAMP/h/?tab=DEFAULT\">Home <span class=\"sr-only\">(current)</span></a>\n" +
    "      <a class=\"nav-item nav-link\" href=\"https://psns.cc.stonybrook.edu/psp/csprods/EMPLOYEE/CAMP/?cmd=logout\">Sign Out</a>\n" +
    "    </div>\n" +

    "  </div></nav>";



// yeet the body
base.innerHTML += "<div id=\"bodi\" class=\"container jumbotron\"></div>";
var bodi = document.getElementById('bodi');
bodi.innerHTML += "<h1>Welcome to SOLAR <i>sexy</i>.</h1>"



//  check for holds
try {
    var holds = document.getElementById('win1divDERIVED_SSS_SCL_DESCR1');
    bodi.innerHTML += "<h2>Holds</h2>";
    bodi.appendChild(holds);
    bodi.innerHTML += "<br>";
}
catch(err){}


// check for messages
try {
    var messages = document.getElementById('win2divSU_MSG_MESSAGE$0');
    bodi.innerHTML += "<h2>Messages</h2>";
    bodi.appendChild(holds);
    bodi.innerHTML += "<br>";
}
catch(err){}


// check for messages
try {
    var todo = document.getElementById('win1divSRVCIND_TODO_VW$0');
    bodi.innerHTML += "<h2>To Do</h2>";
    bodi.appendChild(todo);
    bodi.innerHTML += "<br>";
}
catch(err){}


// drone bomb
var tablelist = document.getElementsByTagName('table');
for (var j = 0; j <= tablelist.length; j++) {
    tablelist[j].parentNode.removeChild(tablelist[j]);
}
try{
    var ptconsole = document.getElementById('pt_console');
    ptconsole.parentNode.removeChild(ptconsole);
}
catch(err){}


// scripts for bootstrap
base.innerHTML += "<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n" +
    "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n" +
    "<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>";
