<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @since         0.10.0
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
use Cake\Cache\Cache;
use Cake\Core\Configure;
use Cake\Core\Plugin;
use Cake\Datasource\ConnectionManager;
use Cake\Error\Debugger;
use Cake\Network\Exception\NotFoundException;

$this->assign("title", "Lewis Campbell");
?>

  <section id="intro" class="text-intro no-padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-10">
          <h1>I'm <span class="text-primary">Lewis Campbell</span>,<br /> <span class="text-primary">Software Engineer</span></h1>
        </div>
      </div>
    </div>
  </section>
  <!-- portfolio-->
  <section id="portfolio" class="no-padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <h2 class="heading">Selected works</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row no-space projects">
        <?php foreach($projects as $project): ?>
         <div class="col-sm-4 col-md-3 ">
          <img src="/img/projects/<?= $project->image?>.screen.png" alt="" class="img-responsive center-block">
          <a class="project-title" href="/project/view/<?= $project->id ?>"><h4 class="center"><?= $project->title?></h4></a>
        </div>
      <?php endforeach; ?>
      </div>
      <br />
        <a href="/project/all" class="button pull-right">All projects</a>
    </div>



  </section>
  <hr />
  <section id="about" class="section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="heading">About me</h2>
        </div>
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6 text-left">
              <p>Started developing private servers of my favorite game when I was eleven years
              old. Ever since then I have enjoyed developing as a hobby, a freelancer, and in industry.
              I am currently on my final year at Swansea University where I am likely to graduate with a MEng in Computing. </p>
              <p><img src="/img/me.jpg" alt="This is me" class="image img-circle img-responsive"></p>
            </div>
            <div class="col-sm-6">
              <p>I love learning new things, especially if they are challenging. It is because of this that
              over the years I become proficient in a few different programming languages.
              Below is a scale that shows how I would judge my confidence in these languages.</p>
              <div class="skill-item">
                <div class="progress-title">GO</div>
                <div class="progress">
                  <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;background-color:#009688;" class="progress-bar progress-bar-skill5"><span class="sr-only">70</span></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">C</div>
                <div class="progress">
                  <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;background-color:#009688;" class="progress-bar progress-bar-skill5"><span class="sr-only">70</span></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">JAVA</div>
                <div class="progress">
                  <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;background-color:#009688;" class="progress-bar progress-bar-skill4"><span class="sr-only">90</span></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">ANDROID</div>
                <div class="progress">
                  <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;background-color:#009688;" class="progress-bar progress-bar-skill4"><span class="sr-only">90</span></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">PHP</div>
                <div class="progress">
                  <div role="progressbar accent" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;background-color:#009688;" class="progress-bar progress-bar-skill1"><span class="sr-only">60</span></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">Javascript</div>
                <div class="progress">
                  <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;background-color:#009688;" class="progress-bar progress-bar-skill2"><span class="sr-only">70</span></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">HTML/CSS</div>
                <div class="progress">
                  <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;background-color:#009688;" class="progress-bar progress-bar-skill3"><span class="sr-only">80</span></div>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 mt-big"></div>
      </div>
    </div>
  </section>
  
  <hr />
  <section id="contact">
    <form  action="/contact/add" method="post" class="contact-form form">
    <div class="container clearfix">
          <h2 class="heading">Contact</h2>
          <div class="row">
            <div class="col-sm-12">

                <div class="controls">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="firstname">Your firstname *</label>
                        <input type="text" name="firstname" id="firstname" placeholder="Enter your firstname" required="required" class="form-control">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="lastname">Your lastname *</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Enter your  lastname" required="required" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Your email *</label>
                    <input type="email" name="email" id="email" placeholder="Enter your  email" required="required" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="message">Your message for us *</label>
                    <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="required" class="form-control"></textarea>
                  </div>
                  <div class="text-center">
                    <input type="submit" value="Send" class="btn btn-primary btn-block btn-responsive">
                  </div>
                </div>
            </div>
          </div>
    </div>
  </form>
  </section>
</body>
</html>
