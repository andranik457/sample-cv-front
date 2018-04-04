<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <title>Sample CV</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="stylesheets/materialize/css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="stylesheets/materialize/css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="stylesheets/materialize/css/main.css?<?= time() ?>" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>
    <nav class="light-blue lighten-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <ul id="nav-mobile" class="sidenav">
                <li><a href="#">Navbar Link</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
    </nav>

    <svg jsname="BUfzDd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 810" preserveAspectRatio="xMinYMin slice" aria-hidden="true">
        <path fill="#efefee" d="M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"></path>
        <path fill="#f6f6f6" d="M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"></path>
        <path fill="#f7f7f7" d="M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"></path>
        <path fill="#fbfbfc" d="M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"></path>
        <path fill="#ebebec" d="M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"></path>
        <path fill="#e1e1e1" d="M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"></path>
        <path fill="#e7e7e7" d="M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"></path>
    </svg>

    <div class="section no-pad-bot" id="index-banner">
        <div class="container">
            <h1 class="header center orange-text">CV info</h1>
        </div>
    </div>

    <div class="container">
        <div class="section personal-info">

            <div class="row">
                <form class="col s8 offset-m2">

                    <div class="row">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" name="first_name" class="validate">
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="last_name" type="text" name="last_name" class="validate">
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s6">
                            <input id="email" type="email" name="email" class="validate">
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="phone_number" type="text" name="phone_number" class="validate">
                            <label for="phone_number">Phone Number</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s6">
                            <input id="birth_date" type="date" name="birth_date" class="datepicker">
                            <label for="birth_date">Birth Dater</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="address" type="text" name="address" class="validate">
                            <label for="address">Address</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s6">
                            <input id="position" type="text" name="position" class="validate">
                            <label for="position">Position</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="bio" type="text" name="bio" class="validate">
                            <label for="bio">Bio</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s4">
                            <i class="material-icons prefix">local_hospital</i>
                            <input id="linkedin" type="text" name="linkedin" class="validate">
                            <label for="linkedin">LinkedIn</label>
                        </div>
                        <div class="input-field col s4">
                            <i class="material-icons prefix">local_hospital</i>
                            <input id="github" type="text" name="github" class="validate">
                            <label for="github">Github</label>
                        </div>
                        <div class="input-field col s4">
                            <i class="material-icons prefix">local_hospital</i>
                            <input id="facebook" type="text"  name="facebook" class="validate">
                            <label for="facebook">Facebook</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span>Image</span>
                                    <input onchange="previewFile()" name="image" id="image" type="file">
                                </div>
                                <div class="file-path-wrapper">
                                    <img src="" height="150" alt="Image preview...">
                                </div>
                            </div>
<!---->
<!--                            <input type="file" name="image" onchange="previewFile()"><br>-->
<!--                            <img src="" height="150" alt="Image preview...">-->
                        </div>
                    </div>

                    <div class="row">
                        <div class="s12 language"></div>
                        <a onClick="appendLanguage(this)" class="waves-effect waves-light btn-small"><i class="material-icons right">touch_app</i>Add Language</a>
                    </div>

                    <div class="row">
                        <div class="s12 skills"></div>
                        <a onClick="appendSkill(this)" class="waves-effect waves-light btn-small"><i class="material-icons right">touch_app</i>Add Skill</a>
                    </div>

                    <div class="row">
                        <div class="s12 work-history"></div>
                        <a onClick="appendWorkHistory(this)" class="waves-effect waves-light btn-small"><i class="material-icons right">touch_app</i>Add Work History</a>
                    </div>

                    <div class="row">
                        <div class="s12 education-history"></div>
                        <a onClick="appendEducationHistory(this)" class="waves-effect waves-light btn-small"><i class="material-icons right">touch_app</i>Add Education History</a>
                    </div>

                    <div class="row">
                        <button onClick="generateCv()" class="btn waves-effect waves-light right" type="button" name="action">Generate CV
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>

    <!--  Scripts-->
    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/icon?family=Material+Icons'>
    <link rel='stylesheet prefetch' href='http://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css'>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js'></script>
    <script src="stylesheets/materialize/js/materialize.js"></script>
    <script src="stylesheets/materialize/js/init.js"></script>
    <script src="stylesheets/materialize/js/main.js?<?= time() ?>"></script>
</body>
</html>
