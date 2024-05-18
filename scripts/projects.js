$(document).ready(function() {
  var projects = {'#nmb_site':0, '#khouse_site':0, '#my_site_2':0, '#my_site':0,
  '#ithaca_site':0, '#current_project':0, '#auv1':0, '#auv2':0, '#auv3':0};
  var checked = {'#2016':0, '#2017':0, '#web':0, '#js':0,
  '#php':0, '#python':0, '#jquery':0, '#react':0};
  var num_checked = 0;

  $('input#2016').click(function() {
    if(checked['#2016'] === 0) {
      checked['#2016'] = 1;
      projects['#auv1']++;
    } else {
      checked['#2016'] = 0;
      projects['#auv1']--;
    }
  });

  $('input#2017').click(function() {
    if(checked['#2017'] === 0) {
      checked['#2017'] = 1;
      projects['#auv2']++;
      projects['#auv3']++;
      projects['#nmb_site']++;
      projects['#khouse_site']++;
      projects['#my_site']++;
      projects['#my_site_2']++;
      projects['#ithaca_site']++;
      projects['#current_project']++;
    } else {
      checked['#2017'] = 0;
      projects['#auv2']--;
      projects['#auv3']--;
      projects['#nmb_site']--;
      projects['#khouse_site']--;
      projects['#my_site']--;
      projects['#my_site_2']--;
      projects['#ithaca_site']--;
      projects['#current_project']--;
    }
  });

  $('input#web').click(function() {
    if(checked['#web'] === 0) {
      checked['#web'] = 1;
      projects['#auv2']++;
      projects['#nmb_site']++;
      projects['#khouse_site']++;
      projects['#my_site']++;
      projects['#my_site_2']++;
      projects['#ithaca_site']++;
      projects['#current_project']++;
    } else {
      checked['#web'] = 0;
      projects['#auv2']--;
      projects['#nmb_site']--;
      projects['#khouse_site']--;
      projects['#my_site']--;
      projects['#my_site_2']--;
      projects['#ithaca_site']--;
      projects['#current_project']--;
    }
  });

  $('input#js').click(function() {
    if(checked['#js'] === 0) {
      checked['#js'] = 1;
      projects['#auv2']++;
      projects['#nmb_site']++;
      projects['#khouse_site']++;
      projects['#my_site_2']++;
      projects['#current_project']++;
    } else {
      checked['#js'] = 0;
      projects['#auv2']--;
      projects['#nmb_site']--;
      projects['#khouse_site']--;
      projects['#my_site_2']--;
      projects['#current_project']--;
    }
  });

  $('input#php').click(function() {
    if(checked['#php'] === 0) {
      checked['#php'] = 1;
      projects['#khouse_site']++;
      projects['#my_site']++;
    } else {
      checked['#php'] = 0;
      projects['#khouse_site']--;
      projects['#my_site']--;
    }
  });

  $('input#python').click(function() {
    if(checked['#python'] === 0) {
      checked['#python'] = 1;
      projects['#auv1']++;
      projects['#auv2']++;
      projects['#auv3']++;
    } else {
      checked['#python'] = 0;
      projects['#auv1']--;
      projects['#auv2']--;
      projects['#auv3']--;
    }
  });

  $('input#jquery').click(function() {
    if(checked['#jquery'] === 0) {
      checked['#jquery'] = 1;
      projects['#nmb_site']++;
      projects['#khouse_site']++;
      projects['#my_site_2']++;
      projects['#current_project']++;
    } else {
      checked['#jquery'] = 0;
      projects['#nmb_site']--;
      projects['#khouse_site']--;
      projects['#my_site_2']--;
      projects['#current_project']--;
    }
  });

  $('input#react').click(function() {
    if(checked['#react'] === 0) {
      checked['#react'] = 1;
      projects['#auv2']++;
      projects['#current_project']++;
    } else {
      checked['#react'] = 0;
      projects['#auv2']--;
      projects['#current_project']--;
    }
  });

  $('input').click(function() {
    num_checked = 0;
    $.each(checked, function(box, val) {
      console.log(box + ': ' + val + ', ' + num_checked);
      if(val === 1) {num_checked ++};
    });
    $.each(projects, function(k,v) {
      if(v === num_checked) {
        $(k).show();
      } else {
        $(k).hide();
      }
    });
  });

  // AUV Projects
  $('#auv1').mouseover(function() {
    $('#auv1 img').attr("src", 'images/auv1_hover.png');
  });
  $('#auv1').mouseout(function() {
    $('#auv1 img').attr("src", 'images/auv1.png');
  });

  $('#auv2').mouseover(function() {
    $('#auv2 img').attr("src", 'images/auv2_hover.png');
  });
  $('#auv2').mouseout(function() {
    $('#auv2 img').attr("src", 'images/auv2.png');
  });

  $('#auv3').mouseover(function() {
    $('#auv3 img').attr("src", 'images/auv3_hover.png');
  });
  $('#auv3').mouseout(function() {
    $('#auv3 img').attr("src", 'images/auv3.png');
  });

  //NMB Project
  $('#nmb_site a').mouseover(function() {
    $('#nmb_site img').attr("src", 'images/nmb_site_hover.png');
  });
  $('#nmb_site a').mouseout(function() {
    $('#nmb_site img').attr("src", 'images/nmb_site.jpg');
  });

  //My Site v.1. Project
  $('#my_site a').mouseover(function() {
    $('#my_site img').attr("src", 'images/my_site_hover.png');
  });
  $('#my_site a').mouseout(function() {
    $('#my_site img').attr("src", 'images/my_site.png');
  });

  //My Site v.2. Project
  $('#my_site_2 a').mouseover(function() {
    $('#my_site_2 img').attr("src", 'images/my_site_2_hover.jpg');
  });
  $('#my_site_2 a').mouseout(function() {
    $('#my_site_2 img').attr("src", 'images/my_site_2.jpg');
  });

  //Ithaca Apple Harvest Festival Project
  $('#ithaca_site a').mouseover(function() {
    $('#ithaca_site img').attr("src", 'images/ithaca_site_hover.jpg');
  });
  $('#ithaca_site a').mouseout(function() {
    $('#ithaca_site img').attr("src", 'images/ithaca_site.jpg');
  });

  //K-House Karaoke Project
  $('#khouse_site a').mouseover(function() {
    $('#khouse_site img').attr("src", 'images/khouse_site_hover.jpg');
  });
  $('#khouse_site a').mouseout(function() {
    $('#khouse_site img').attr("src", 'images/khouse_site.jpg');
  });

  //Current Project
  $('#current_project a').mouseover(function() {
    $('#current_project img').attr("src", 'images/current_project_hover.png');
  });
  $('#current_project a').mouseout(function() {
    $('#current_project img').attr("src", 'images/current_project.png');
  });
});
