
//client side validation codes for sign UP (joinNow) forms

( function () {
    function validateEmail(email){
        if(!email){throw "Error: no email provided";};
        if(!(typeof email == 'string')){throw "Error: email must be a string";};
        email = email.trim().toLowerCase();
        if(email.length === 0){throw "Error: Email cannot be an empty string or string with just spaces";};
        if(!(/^(?!.*\.\.)+([^.]+[A-Za-z0-9_.! @\\#"()$%&'*+/=?^`{|}~-])+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})*$/.test(email)))
        {throw "Error: Invalid Email";};
        return email;
    };
    function validatePassword(password){
        if (!password) { throw "Error: no password provided"; };
        if (!(typeof password == 'string')) { throw "Error: Password must be a string"; };
        password = password.trim();
        if (password.length === 0) { throw "Error: Password cannot be an empty string or string with just spaces"; };
        if (password.length < 8) { throw "Error: Password must be atleast 8 characters long"; };
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (!format.test(password)) { throw "Error: Password must contain atleast one special characters[!@#$%^&*()|\,./?<>]" };
        format = /\d/;
        if (!format.test(password)) { throw "Error: Password must contain atleast one number" };
        format = /[A-Z]/;
        if (!format.test(password)) { throw "Error: Password must contain atleast one uppercase charater" };
        format = /[a-z]/;
        if (!format.test(password)) { throw "Error: Password must contain atleast one lowercase charater" };
    
        return password;
    };

    function validateName(name, variable){
        if (!name) { throw `Error: ${variable} not given`; };
        if (!(typeof name == 'string')) { throw `Error: ${variable} must be a string`; };
        name = name.trim();
        if (name.length === 0) { throw `Error: ${variable} cannot be an empty string or string with just spaces`; };
        if ((name.length < 3) || (name.length > 25)) { throw `Error: ${variable} length should be between 3 and 25`; };
        if((/^\d+$/.test(name))){throw `Error: ${variable} cannot contain just numbers`;};
        if(!(/^[A-Za-z0-9 ]*$/.test(name))){throw `Error: ${variable} cannot contain special characters`;};
        return name;
    };

    function validateUsername(username){
        if(!username){throw `Error: username not given`;};
        if(!(typeof username == 'string')){throw `Error: username must be a string`;};
        username = username.trim();
        if(username.length === 0){throw `Error: username cannot be an empty string or string with just spaces`;};
        if((username.length < 3) || (username.length > 15)) {throw 'Error: Username length has to be between 3 and 15';};
        if(!(/^[a-zA-Z0-9!@#$%^&*-_+=|~]+$/.test(username))) {throw 'Error: Username can contain only alphabets a-z, numbers 0-9 and !@#$%^&*-_+=|~`';};
        return username.toLowerCase();
    };

    function validatePhoneNumber(phoneNumber) {
        if (!phoneNumber) { throw "Error: no phoneNumber provided"; };
        if (!(typeof phoneNumber == 'string')) { throw "Error: phoneNumber must be a string"; };
        phoneNumber = phoneNumber.trim();
        if (phoneNumber.length === 0) { throw "Error: phoneNumber cannot be empty"; };
        if (phoneNumber.length > 10) { throw "Error: phoneNumber cannot be more than 10 digits"; };
        let format = /^[0-9]+$/;
        if (!format.test(phoneNumber)) { throw "Error: PhoneNumbers can contain only numbers"; };
        phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6);
        return phoneNumber;
    };

    function validateStreetName(streetName) {
        if (!streetName) { throw "Error: No streetName provided"; };
        if (typeof streetName != 'string') { throw "Error: streetName must be a string"; };
        streetName = streetName.trim();
        if (streetName.length === 0) { throw "Error: streetName cannot be empty"; };
        let format = /^[A-Za-z0-9 ]*$/;
        if (!format.test(streetName)) { throw "Error: street name cannot contain special characters"; };
        return streetName;
    };
    function validateCity(city){
        if (!city) { throw "Error: No city provided"; };
        if (!(typeof city == 'string')) { throw "Error: city must be a string"; };
        city = city.trim();
        if (city.length === 0) { throw "Error: city cannot be empty"; };
        let format = /^[A-Za-z0-9 ]*$/;
        if (!format.test(city)) { throw "Error: city cannot contain special characters"; };
        return city;
    };
    function validateState(state){
        if (!state) { throw "Error: No state provided"; };
        if (typeof state != 'string') { throw "Error: state must be a string"; };
        state = state.trim();
        if (state.length === 0) { throw "Error: state cannot be empty"; };
        let format = /^[A-Za-z0-9 ]*$/;
        if (!format.test(state)) { throw "Error: state cannot contain special characters"; };
        let list_of_states = [
            "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida",
            "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine",
            "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska",
            "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio",
            "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas",
            "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming",'al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la',
            'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok',
            'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy'
        ]
        let s = state.toLowerCase();
        if(!list_of_states.includes(s)) {throw "Error: State not valid. Enter a state in US."}
        return state;
    };
    function validateZipcode(zipCode) {
    
        if (!zipCode) { throw "Error: No zipCode provided"; };
        if (typeof zipCode != 'string') { throw "Error: zipCode must be a string"; };
        zipCode = zipCode.trim();
        if (zipCode.length === 0) { throw "Error: zipCode cannot be empty"; };
        if (zipCode.length > 5) { throw "Error: zipCode cannot be more than 5 digits"; };
        let format = /^[0-9]+$/;
        if (!format.test(zipCode)) { throw "Error: zipCode can contain only numbers"; };
        return zipCode;
    };


    function validateSex(sex){
        if (!sex) { throw "Error: no sex provided"; };
        if (!(typeof sex == 'string')) { throw "Error: sex must be a string"; };
        sex = sex.trim().toLowerCase();
        if (sex.length === 0) { throw "Error: sex cannot be an empty string or string with just spaces"; };
        console.log(sex);
        if(!(['male','female','non-binary','prefer-not-to-say'].includes(sex))) { throw "Error: Invalid sex" };
        return sex;
    };

    function validateDob(dob){
        // console.log(dob);
        // console.log(typeof(dob));
        if (!dob) { throw "Error: no date of birth provided"; };
        if (!(typeof dob == 'string')) { throw "Error: date of birth must be a string"; };
        dob = dob.trim();
        console.log(dob);
        if (dob.length != 10) { throw "Error: Invalid date of birth"; };
        // let format = /^(0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])[\-]\d{4}$/;
        let format = /^\d{4}[\-](0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])$/;
        if (!format.test(dob)) { throw "Error: Invalid date of birth"; };
        let year  = Number(dob.slice(0, 2));
        let month  = Number(dob.slice(3, 5));
        let day  = Number(dob.slice(6));
        // console.log(month); console.log(day); console.log(year);
        if ((day < 1) || (day > 31) || (month < 1) || (month > 12) || (year < 0) || (year > 2010)) { throw "Error: Invalid date"; };
        if (year > 2010) { throw "Error: User needs to be age 13 and above to sign up"; };
        // dob = `${dob.slice(0,2)}/${dob.slice(3,5)}/${dob.slice(6)}`;
        return dob;
    };

    function validatePlan(plan){
        if (!plan) { throw "Error: no plan provided"; };
        if (!(typeof plan == 'string')) { throw "Error: plan must be a string"; };
        plan = plan.trim().toLowerCase();
        if (plan.length === 0) { throw "Error: plan cannot be an empty string or string with just spaces"; };
        if (!(["alpha", "beta", "omega","na"].includes(plan))) { throw "Error: Invalid plan"; };
        return plan;
    };
    function validateSecondPassword(firstp, secondp){
        if(firstp != secondp) {throw "Error: Passwords do not match."};
        return secondp;
    };

    const formSignUp = document.getElementById('joinNow-form');
    if(formSignUp){
        
        // const errorContainer = document.getElementById('error-container');
        // const errorTextElement = errorContainer.getElementsByClassName('text-goes-here')[0];

        const errorContainer1 = document.getElementById('error-container1');
        const errorTextElement1 = errorContainer1.getElementsByClassName('text-goes-here')[0];

        const errorContainer2 = document.getElementById('error-container2');
        const errorTextElement2 = errorContainer2.getElementsByClassName('text-goes-here')[0];

        const errorContainer3 = document.getElementById('error-container3');
        const errorTextElement3 = errorContainer3.getElementsByClassName('text-goes-here')[0];

        const errorContainer4 = document.getElementById('error-container4');
        const errorTextElement4 = errorContainer4.getElementsByClassName('text-goes-here')[0];

        const errorContainer5 = document.getElementById('error-container5');
        const errorTextElement5 = errorContainer5.getElementsByClassName('text-goes-here')[0];

        const errorContainer6 = document.getElementById('error-container6');
        const errorTextElement6 = errorContainer6.getElementsByClassName('text-goes-here')[0];

        const errorContainer7 = document.getElementById('error-container7');
        const errorTextElement7 = errorContainer7.getElementsByClassName('text-goes-here')[0];

        const errorContainer8 = document.getElementById('error-container8');
        const errorTextElement8 = errorContainer8.getElementsByClassName('text-goes-here')[0];

        const errorContainer9 = document.getElementById('error-container9');
        const errorTextElement9 = errorContainer9.getElementsByClassName('text-goes-here')[0];

        const errorContainer10 = document.getElementById('error-container10');
        const errorTextElement10 = errorContainer10.getElementsByClassName('text-goes-here')[0];

        const errorContainer11 = document.getElementById('error-container11');
        const errorTextElement11 = errorContainer11.getElementsByClassName('text-goes-here')[0];

        const errorContainer12 = document.getElementById('error-container12');
        const errorTextElement12 = errorContainer12.getElementsByClassName('text-goes-here')[0];

        const errorContainer13 = document.getElementById('error-container13');
        const errorTextElement13 = errorContainer13.getElementsByClassName('text-goes-here')[0];

        // const errorContainer14 = document.getElementById('error-container14');
        // const errorTextElement14 = errorContainer14.getElementsByClassName('text-goes-here')[0];

        const errorContainer15 = document.getElementById('error-container15');
        const errorTextElement15 = errorContainer15.getElementsByClassName('text-goes-here')[0];

        const errorContainer16 = document.getElementById('error-container16');
        const errorTextElement16 = errorContainer16.getElementsByClassName('text-goes-here')[0];

        const errorContainer17 = document.getElementById('error-container17');
        const errorTextElement17 = errorContainer17.getElementsByClassName('text-goes-here')[0];

        formSignUp.addEventListener('submit', (event) => {
            // event.preventDefault();
            // const validInputsList = [];
            try{
                errorContainer1.classList.add('hidden');
                errorContainer1.style.display = 'none';
                const firstName = validateName(document.getElementById('firstName').value, 'First name');

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement1.textContent = e;
                errorContainer1.style.display = 'block';
                errorContainer1.classList.remove('hidden');
                // formSignUp['firstName'].reset();
            };
            try{
                errorContainer2.classList.add('hidden');
                errorContainer2.style.display = 'none';
                const lastName = validateName(document.getElementById('lastName').value, 'Last name');

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement2.textContent = e;
                errorContainer2.style.display = 'block';
                errorContainer2.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer3.classList.add('hidden');
                errorContainer3.style.display = 'none';
                const sex = validateSex(document.getElementById('sex').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement3.textContent = e;
                errorContainer3.style.display = 'block';
                errorContainer3.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer4.classList.add('hidden');
                errorContainer4.style.display = 'none';
                // console.log(document.getElementById('dob').value)
                // console.log(typeof(document.getElementById('dob').value));
                const dob = validateDob(document.getElementById('dob').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement4.textContent = e;
                errorContainer4.style.display = 'block';
                errorContainer4.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer5.classList.add('hidden');
                errorContainer5.style.display = 'none';
                const emailString = validateEmail(document.getElementById('emailAddress').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement5.textContent = e;
                errorContainer5.style.display = 'block';
                errorContainer5.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer6.classList.add('hidden');
                errorContainer6.style.display = 'none';
                const ph = validatePhoneNumber(document.getElementById('ph').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement6.textContent = e;
                errorContainer6.style.display = 'block';
                errorContainer6.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer7.classList.add('hidden');
                errorContainer7.style.display = 'none';
                const streetName = validateStreetName(document.getElementById('streetName').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement7.textContent = e;
                errorContainer7.style.display = 'block';
                errorContainer7.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer8.classList.add('hidden');
                errorContainer8.style.display = 'none';
                const city = validateCity(document.getElementById('city').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement8.textContent = e;
                errorContainer8.style.display = 'block';
                errorContainer8.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer9.classList.add('hidden');
                errorContainer9.style.display = 'none';
                const state = validateState(document.getElementById('state').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement9.textContent = e;
                errorContainer9.style.display = 'block';
                errorContainer9.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer10.classList.add('hidden');
                errorContainer10.style.display = 'none';
                const zip = validateZipcode(document.getElementById('zip').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement10.textContent = e;
                errorContainer10.style.display = 'block';
                errorContainer10.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer11.classList.add('hidden');
                errorContainer11.style.display = 'none';
                const zip = validateUsername(document.getElementById('username').value);
                


            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement11.textContent = e;
                errorContainer11.style.display = 'block';
                errorContainer11.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer12.classList.add('hidden');
                errorContainer12.style.display = 'none';
                const emergencyContactName = validateName(document.getElementById('emergencyContactName').value, 'Emergency Contact name');

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement12.textContent = e;
                errorContainer12.style.display = 'block';
                errorContainer12.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer13.classList.add('hidden');
                errorContainer13.style.display = 'none';
                const emergencyContactPhoneNumber = validatePhoneNumber(document.getElementById('emergencyContactPhoneNumber').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement13.textContent = e;
                errorContainer13.style.display = 'block';
                errorContainer13.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer15.classList.add('hidden');
                errorContainer15.style.display = 'none';
                const role = validatePlan(document.getElementById('plan').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement15.textContent = e;
                errorContainer15.style.display = 'block';
                errorContainer15.classList.remove('hidden');
                // formSignUp.reset();
            };
            try{
                errorContainer16.classList.add('hidden');
                errorContainer16.style.display = 'none';
                const passwordString = validatePassword(document.getElementById('passwordInput').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement16.textContent = e;
                errorContainer16.style.display = 'block';
                errorContainer16.classList.remove('hidden');
                formSignUp['passwordInput'].value = "";
            };

            try{
                errorContainer17.classList.add('hidden');
                errorContainer17.style.display = 'none';
                const cPasswordString = validateSecondPassword(document.getElementById('passwordInput').value,document.getElementById('confirmPasswordInput').value);

            }catch(e){
                event.preventDefault();
                const message = typeof e === 'string' ? e : e.message;
                errorTextElement17.textContent = e;
                errorContainer17.style.display = 'block';
                errorContainer17.classList.remove('hidden');
                formSignUp['passwordInput'].value = "";
                formSignUp['confirmPasswordInput'].value = "";
            };

    });//close event listener
    
       
    };
}) ();