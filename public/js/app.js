// wrap it all in a function, because I don't need any of it to be accessible globally
(function(w, d, undefined) {
  /**
   * returns the string with a space before any capital letter
   * converting joined "PascalCase" string into "Title Case" strings
   * A string that is already capitalized and has no
   * other capital letters will return unmodified
   * A string of all lower case will return unmodified
   * @method splitAtCaps
   * @extends String
   * @return {[String]} [the transformed string]
   */
  String.prototype.splitAtCaps = function() {
    return this.replace(/([^A-Z]+)([A-Z]{1})/g, '$1 $2');
  };
  /**
   * takes a boolean value and returns a random affirmative
   * or negative expression depending on true or false
   * @method funnyBoolean
   * @extends Boolean
   * @return {[String]} [the positive or negative expression]
   */
  Boolean.prototype.funnyBoolean = function() {
    var o = {
      "true": ["Yup", 'You betcha!!', 'No doubt', 'Of course', 'Yeah baby!', 'You know it!', 'I think so', 'Believe it!', 'For sure!', 'Naturally'],
      "false": ['Nope', 'Not At All', 'Of Course Not']
    };
    var yesno = o[this];
    var len = yesno.length - 1;
    return yesno[Math.round(Math.random() * len)];
  };
  var dg = {};
  /**
   *  @name contentHeading
   *  @description data for #content-heading handlebars template
   */
  dg.contentHeading = {
    "heading": "About The Job",
    "subheading": "How about we tell you a bit about the job and what we expect from you?  ʘ‿ʘ"
  };
  /**
   *  @name equipment
   *  @external job
   *  @description Modifies `job.equipment` object
   */
  dg.equipment = {
    "heading": "Job Equipment",
    "items": [{
      "item": ["Operating Systems", job.equipment.operatingsystem.join(' or ')]
    }, {
      "item": ["Machine Type", job.equipment.computer]
    }]
  };
  /**
   *  @name essentials
   *  @external job
   *  @description Modifies `job.essentials` object
   */
  dg.essentials = {
    "heading": "Essentials",
    "items": [{
      "item": ["Locations ", job.essentials.locations]
    }, {
      "item": ["Employment ", job.essentials.employment]
    }, {
      "item": ["Experience ", job.essentials.experience.join(' cat ')]
    }, {
      "item": ["Start Date ", Date(job.essentials.startdate)]
    }, {
      "item": ["Company Size ", job.essentials.companysize.splitAtCaps()]
    }, {
      "item": ["Team Size", "<em>min:</em> " + job.essentials.teamsize.min + "  |  <em>max:</em> " + job.essentials.teamsize.max]
    }]
  };
  /**
   *  @name essentials_img
   *  @external job
   *  @description Data for `job.essentials` template image section
   */
  dg.essentials_img = {
    "img": true,
    "imgsrc": "img/macbook.svg"
  };
  /**
   *  @name methodology
   *  @external job
   *  @description Modifies `job.methodology` object
   */
  dg.methodology = {
    "heading": "Our Methodology",
    "imgsrc": "",
    "items": [{
      "item": ["Code Reviews", job.methodology.codereviews.funnyBoolean()]
    }, {
      "item": ["Prototyping", job.methodology.prototyping.funnyBoolean()]
    }, {
      "item": ["Fail Fast", job.methodology.failfast.funnyBoolean()]
    }, {
      "item": ["Unit Tests", job.methodology.unittests.funnyBoolean()]
    }, {
      "item": ["Integration Tests", job.methodology.integrationtests.funnyBoolean()]
    }, {
      "item": ["Build Server", job.methodology.buildserver.splitAtCaps()]
    }, {
      "item": ["Static Code Analysis", job.methodology.staticcodeanalysis.splitAtCaps()]
    }, {
      "item": ["Version Control", job.methodology.versioncontrol]
    }, {
      "item": ["Issue Tracker", job.methodology.issuetracker]
    }, {
      "item": ["Standups", job.methodology.standups.funnyBoolean()]
    }, {
      "item": ["Quick Start", job.methodology.quickstart.funnyBoolean()]
    }, {
      "item": ["Commit On Day One", job.methodology.commitondayone.funnyBoolean()]
    }]
  };
  /**
   *  @name other
   *  @external job
   *  @description Modifies `job.other` object
   */
  dg.other = {
    "heading": "Other",
    "items": [{
      "item": [job.other[0], job.other[1]]
    }]
  };
  /**
   *  @name other_img
   *  @external job
   *  @description Data for profile template image section
   */
  dg.other_img = {
    "img": true,
    "imgsrc": "img/chemistry.svg"
  };
  /**
   *  @name profile
   *  @external job
   *  @description Modifies `job.profile` object
   */
  dg.profile = {
    "heading": "Job Profile",
    "items": [{
      "item": ["New Features", job.profile.newfeatures + '%']
    }, {
      "item": ["Client Support", job.profile.clientsupport + '%']
    }, {
      "item": ["Documentation", job.profile.documentation + '%']
    }, {
      "item": ["Maintenance", job.profile.maintenance + '%']
    }, {
      "item": ["Meetings", job.profile.meetings + '%']
    }]
  };
  /**
   *  @name profile_img
   *  @external job
   *  @description Data for profile template image section
   */
  dg.profile_img = {
    "img": true,
    "imgsrc": "img/calendar.svg"
  };
  /**
   *  @name specs
   *  @external job
   *  @description Modifies `job.specs` object
   */
  dg.specs = {
    "heading": "Job Specs",
    "items": [{
      "item": ["Workload", job.specs.workload]
    }, {
      "item": ["Work Week", job.specs.workweek + ' Hours']
    }, {
      "item": ["Schedule", job.specs.schedule]
    }, {
      "item": ["Remote Working", job.specs.remote]
    }, {
      "item": ["PTO", job.specs.pto]
    }]
  };
  /**
   *  @name technologies
   *  @external job
   *  @description Modifies `job.technologies` object
   */
  dg.technologies = {
    "heading": "Our Technologies",
    "items": [{
      "item": ["Css3", job.technologies.css3]
    }, {
      "item": ["Html5", job.technologies.html5]
    }, {
      "item": ["Javascript", job.technologies.javascript]
    }, {
      "item": ["Node", job.technologies.node]
    }, {
      "item": ["Rest", job.technologies.rest]
    }, {
      "item": ["Uiux", job.technologies.uiux]
    }, {
      "item": ["Design", job.technologies.design]
    }, {
      "item": ["Testing", job.technologies.testing]
    }, {
      "item": ["Frameworks", job.technologies.framework]
    }, {
      "item": ["Boardgames", job.technologies.boardgames]
    }]
  };
  /**
   *  @name closing
   *  @description template item for #closing Handlebars template
   */
  dg.closing = {
    quote: "It has been a pleasure providing this information for potential Gridium employees"
  };
  /**
   *  @name mainHeading
   *  @external job
   *  @description template item for #main-heading Handlebars template
   */
  dg.mainHeading = {
    "heading": job.headline,
    "subheading": "You think you got the chops?",
    "background": "../img/jumbotron-16-9.jpg"
  };
  /**
   *  @external Handlebars
   *  @mixin dlist
   *  @mixes Handlebars.registerHelper
   *  @description Custom Rendering mixin for Handlebar Template
   */
  Handlebars.registerHelper('dlist', function(items, options) {
    var out = "<dl class='dl-horizontal'>";
    var dd, dt, val, _item, __subitem, _subitem, _sublabel;
    Object.keys(items).forEach(function(key, i) {
      _item = items[key];
      dt = _item.item[0];
      dd = _item.item[1];
      // Is dd {the list value Item} an Object
      val = Object.prototype.toString.call(dd);
      if (val !== "[object Object]") {
        // its not an object, we just continue current list
        out = out + "<dt>" + _item.item[0] + "</dt><dd>" + _item.item[1] + "</dd>";
      } else {
        /**
         * 1. We complete current list;
         * 2. Render new list;
         * 3. Add a custom label to the new list
         * 4. Complete that list (close it with <DL> tag)
         * 5. Open a new list to continue with non-nested data
         */
        __subitem = _item.item[1].oneof;
        _sublabel = _item.item[0] + ' - must have one or more of';
        // must have empty dd in rendered label or everything goes to pot
        out = out + '</dl><dl class="dl-horizontal nested"><dt class="well dl-nested-label">' + _sublabel + '</dt><dd></dd>';
        Object.keys(__subitem).forEach(function(sublabel, index) {
          _subitem = __subitem[sublabel];
          out = out + "<dt>" + sublabel + "</dt><dd>" + _subitem + "</dd>";
        });
        out = out + "</dl><dl class='dl-horizontal'>";
      }
    });
    out = out + "</dl>";
    return out;
  });
  $(document).ready(function() {
    var dfr = $.Deferred();
    var src = '../img/' + $('.jumbotron').data('bg');
    var img = $('<img />', {
      src: src
    });
    img.on('load', function() {
      dfr.resolve();
    });
    $('[data-tpl]').each(function(e) {
      var _this = $(this);
      var tpl = $(this).data('tpl');
      var _compile = Handlebars.compile($('#' + tpl).html());
      var id = this.id;
      var html = $(this).html(_compile(dg[id])).promise();
      html.done(function() {
        // make sure background img is loaded before show
        if (id === "mainHeading") {
          dfr.done(function() {
            $('.jumbotron').css('background-image', 'url(' + src + ')')
              .removeClass('loading');
          });
        } else {
          _this.closest('.loading').removeClass('loading');
        }
      });
    });
  });
}(window, document));