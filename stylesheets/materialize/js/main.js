let availableLanguages = {
    data: {
        "English": null,
        "Russian": null,
        "Armenian": 'https://placehold.it/250x250'
    }
};

let availableSkills = {
    data: {
        "MongoDB": null,
        "MySql": null,
        "PHP": 'https://placehold.it/250x250'
    }
};

let skillsCount = 0;
let languagesCount = 0;
let workHistoryCount = 0;
let educationHistoryCount = 0;
const knowledgeMaxLevel = 10;
let avatarBase64 = '';
let avatarName = '';
let skillsLevelInfo = {};
let languageLevelInfo = {};
let workHistoryInfo = {};
let educationHistoryInfo = {};

$(document).ready(function(){
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false
    });
});

function appendLanguage(_this) {
    languagesCount = languagesCount + 1;

    // remove wave effect
    $('.waves-ripple ').remove();

    let languageBar = '<div class="row">\
            <div class="input-field col s4">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="language-'+ languagesCount +'" class="autocomplete" name="language_'+ languagesCount +'">\
                <label for="language-'+ languagesCount +'">Select Language</label>\
            </div>\
            <div class="input-field col s7">\
                <select onChange="chooseLanguageLevel('+ languagesCount +')" id="language_level_'+ languagesCount +'">\
                    <option value="" disabled selected>Choose your level</option>\
                    <option value="A1">A1 | Beginner | Novice (Low/Mid/High)</option>\
                    <option value="A2">A2 | Elementary | Intermediate (Low/Mid)</option>\
                    <option value="B1">B1 | Intermediate | Intermediate High</option>\
                    <option value="B2">B2 | Upper Intermediate | Advanced (Low/Mid/High)</option>\
                    <option value="C1">C1 | Advanced | Superior</option>\
                    <option value="C2">C2 | Proficient | Distinguished</option>\
                </select>\
                <label>Select language level</label>\
            </div>\
            <div class="input-field col s1">\
                <i onClick="removeParent(this)" class="material-icons remove-icon">delete_forever</i>\
            </div>\
        </div>';

    $('.personal-info .language').append(languageBar);

    let options = availableLanguages;

    let elem = document.querySelector('.autocomplete');
    M.Autocomplete.init(elem, options);

    // Or with jQuery

    // $(document).ready(function(){
    //     $('input.autocomplete').autocomplete({
    //         data: {
    //             "Apple": null,
    //             "Microsoft": null,
    //             "Google": 'https://placehold.it/250x250'
    //         },
    //     });
    // });


    // var elem = document.querySelector('select');
    // var instance = M.FormSelect.init(elem, options);

    // Or with jQuery

    $(document).ready(function(){
        $('select').formSelect();
    });
}

function appendSkill(_this) {
    skillsCount = skillsCount + 1;

    // remove wave effect
    $('.waves-ripple ').remove();

    let skillBar = '<div class="row skill-'+ skillsCount +'">\
            <div class="input-field col s4">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="skill-input-'+ skillsCount +'" class="autocomplete" name="skill_'+ skillsCount +'">\
                <label for="skill-input-'+ skillsCount +'">Select Skill</label>\
            </div>\
            <div class="input-field col s7">\
                <div class="col s12 known-level-'+ skillsCount +'"></div>\
            </div>\
            <div class="input-field col s1">\
                <i onClick="removeParent(this)" class="material-icons remove-icon">delete_forever</i>\
            </div>\
        </div>';

    $('.personal-info .skills').append(skillBar);
    knownLevel(skillsCount);

    let options = availableSkills;

    let elem = document.querySelector('.autocomplete');
    M.Autocomplete.init(elem, options);

    $(document).ready(function(){
        $('select').formSelect();
    });
}

function appendWorkHistory(_this) {
    workHistoryCount = workHistoryCount + 1;

    // remove wave effect
    $('.waves-ripple ').remove();

    let workHistoryBar = '<div class="row skill-'+ workHistoryCount +'">\
            <div class="input-field col s4">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="company-name-'+ workHistoryCount +'" class="autocomplete" name="company_'+ workHistoryCount +'">\
                <label for="company-name-'+ workHistoryCount +'">Company Name</label>\
            </div>\
            <div class="input-field col s3">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="position-'+ workHistoryCount +'" class="autocomplete" onChange="getCompanyInfo('+ workHistoryCount +')">\
                <label for="position-'+ workHistoryCount +'">Position</label>\
            </div>\
            <div class="input-field col s2">\
                <input id="start-date-'+ workHistoryCount +'" type="date" class="datepicker-start-'+ workHistoryCount +'" onChange="getCompanyInfo('+ workHistoryCount +')">\
                <label for="start-date-'+ workHistoryCount +'">Start Dater</label>\
            </div>\
            <div class="input-field col s2">\
                <input id="end-date-'+ workHistoryCount +'" type="date" class="datepicker-end-'+ workHistoryCount +'" onChange="getCompanyInfo('+ workHistoryCount +')">\
                <label for="end-date-'+ workHistoryCount +'">End Dater</label>\
            </div>\
            <div class="input-field  col s1">\
                <i onClick="removeParent(this)" class="material-icons remove-icon">delete_forever</i>\
            </div>\
        </div>';

    // <div class="input-field col s3">\
    // <textarea id="work-history-description-'+ workHistoryCount +'" class="materialize-textarea"></textarea>\
    // <label for="work-history-description-'+ workHistoryCount +'">Description</label>\
    // </div>\

    $('.personal-info .work-history').append(workHistoryBar);
    // knownLevel(skillsCount);

    let options = availableSkills;

    var elem = document.querySelector('.autocomplete');
    var instance = M.Autocomplete.init(elem, options);

    $(document).ready(function(){
        $('select').formSelect();
    });


    $('.datepicker-start-'+ workHistoryCount).pickadate({
        selectMonths: true,
        selectYears: 15,
        format: 'dd-mmm-yyyy'
    });

    $('.datepicker-end-'+ workHistoryCount).pickadate({
        selectMonths: true,
        selectYears: 15,
        format: 'dd-mmm-yyyy'
    });
}

function appendEducationHistory(_this) {
    educationHistoryCount = educationHistoryCount + 1;

    // remove wave effect
    $('.waves-ripple ').remove();

    let educationHistoryBar = '<div class="row skill-'+ educationHistoryCount +'">\
            <div class="input-field col s4">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="university-'+ educationHistoryCount +'" class="autocomplete" name="education_'+ educationHistoryCount +'">\
                <label for="university-'+ educationHistoryCount +'">Company Name</label>\
            </div>\
            <div class="input-field col s3">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="faculty-'+ educationHistoryCount +'" class="autocomplete" onChange="getEducationInfo('+ educationHistoryCount +')">\
                <label for="faculty-'+ educationHistoryCount +'">Position</label>\
            </div>\
            <div class="input-field col s3">\
                <i class="material-icons prefix">textsms</i>\
                <input type="text" id="qualification-'+ educationHistoryCount +'" class="autocomplete" onChange="getEducationInfo('+ educationHistoryCount +')">\
                <label for="qualification-'+ educationHistoryCount +'">Position</label>\
            </div>\
            <div class="input-field col s2">\
                <input id="education-start-date-'+ educationHistoryCount +'" type="date" class="education-start-'+ educationHistoryCount +'" onChange="getEducationInfo('+ educationHistoryCount +')">\
                <label for="education-start-date-'+ educationHistoryCount +'">Start Dater</label>\
            </div>\
            <div class="input-field col s2">\
                <input id="education-end-date-'+ educationHistoryCount +'" type="date" class="education-end-'+ educationHistoryCount +'" onChange="getEducationInfo('+ educationHistoryCount +')">\
                <label for="education-end-date-'+ educationHistoryCount +'">End Dater</label>\
            </div>\
            <div class="input-field  col s1">\
                <i onClick="removeParent(this)" class="material-icons remove-icon">delete_forever</i>\
            </div>\
        </div>';

    $('.personal-info .education-history').append(educationHistoryBar);
    // knownLevel(skillsCount);

    let options = availableSkills;

    var elem = document.querySelector('.autocomplete');
    var instance = M.Autocomplete.init(elem, options);

    $(document).ready(function(){
        $('select').formSelect();
    });


    $('.education-start-'+ educationHistoryCount).pickadate({
        selectMonths: true,
        selectYears: 15,
        format: 'dd-mmm-yyyy'
    });

    $('.education-end-'+ educationHistoryCount).pickadate({
        selectMonths: true,
        selectYears: 15,
        format: 'dd-mmm-yyyy'
    });
}

function generateCv() {
    let criteria = $(".personal-info").find('select, textarea, input').serialize();
    criteria += '&image='+ avatarBase64 +
        '&imageName='+ avatarName +
        '&languageInfo='+ JSON.stringify(languageLevelInfo) +
        '&workHistoryInfo='+ JSON.stringify(workHistoryInfo) +
        '&educationHistoryInfo='+ JSON.stringify(educationHistoryInfo) +
        '&skillsLevelInfo='+ JSON.stringify(skillsLevelInfo);

    // console.log(criteria);

    // let typeName = $('.new-ad-filter-area #type').val();
    // showFilterSettings = $('.'+ os.toLowerCase() + ' .ad-type-header.'+ typeName).find('th').get(0);

    // use form data for image upload
    // let formData = new FormData();
    //
    // // append iamge file
    // let input = document.getElementById('image');
    // formData.append('image', input.files[0], input.value);
    //
    // // parse serialize and append to form data
    // for (var i = 0; i < criteria.length; i++) {
    //     formData.append(criteria[i]['name'], criteria[i]['value']);
    // }
    //
    //
    // console.log(formData);
    // formData.append('action', 'upsert-filter-document');
    // formData.append('setting', 'new-filter');

    let url = 'http://local.sample-cv.com/user/info/save';

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: criteria,
        // contentType: "application/json",
        success: function (result) {
            console.log(result);
        }
    });
}

function knownLevel(skillsCount) {
    let knownLevels = '';

    for (let i = 1; i <= 10; i++) {
        knownLevels += '<div class="col s1"><p class="circle circle-inactive level-'+ i +'" onClick="selectKnownLevel('+ skillsCount +', '+ i +')"></p></div>';
    }

    $('.known-level-'+ skillsCount).append(knownLevels);
}

function selectKnownLevel(skillsCountInfo, knownLevelInfo) {
    let i;

    let levelKey = ('skill_'+ skillsCountInfo).toString();
    skillsLevelInfo[levelKey] = knownLevelInfo;

    console.log(skillsCountInfo, knownLevelInfo);

    // inactivate all selected levels
    for (i = 0; i <= knowledgeMaxLevel; i++) {
        $('.skill-'+ skillsCountInfo).find('.level-'+ i).removeClass('circle-active').addClass('circle-inactive');
    }

    // activate selected level
    for (i = 0; i <= knownLevelInfo; i++) {
        $('.skill-'+ skillsCountInfo).find('.level-'+ i).removeClass('circle-inactive').addClass('circle-active');
    }
}

function removeParent(_this) {
    $(_this).parent().parent().remove();
}

function previewFile() {
    let preview = document.querySelector('img');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();

    avatarName = file.name;

    reader.onload = function () {
        avatarBase64 = encodeURIComponent(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function chooseLanguageLevel(langCount) {
    let langKey = ('language_'+ langCount).toString();

    languageLevelInfo[langKey] = $('#language_level_'+ langCount).val();
}

function getCompanyInfo(companyCount) {
    let position            = $('#position-'+ companyCount).val();
    let companyStartDate    = $('#start-date-'+ companyCount).val();
    let companyEndDate      = $('#end-date-'+ companyCount).val();

    let companyKey = ('company_'+ companyCount).toString();

    workHistoryInfo[companyKey] = {
        "position":         position,
        "companyStartDate": companyStartDate,
        "companyEndDate":   companyEndDate,
    };
}

function getEducationInfo(educationCount) {
    let faculty             = $('#faculty-'+ educationCount).val();
    let qualification       = $('#qualification-'+ educationCount).val();
    let educationStartDate  = $('#education-start-date-'+ educationCount).val();
    let educationEndDate    = $('#education-end-date-'+ educationCount).val();

    let educationKey = ('education_'+ educationCount).toString();

    educationHistoryInfo[educationKey] = {
        "faculty":              faculty,
        "qualification":        qualification,
        "educationStartDate":   educationStartDate,
        "educationEndDate":     educationEndDate,
    };
}
