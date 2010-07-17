
  
  

  


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>public/javascripts/jquery.NobleCount.js at master from pedromtavares's twitter_integration - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="http://github.com/fluidicon.png" title="GitHub" />

    <link href="http://assets0.github.com/stylesheets/bundle_common.css?61b5039b1ce255c2a6acbff52acc1f9b426a05b2" media="screen" rel="stylesheet" type="text/css" />
<link href="http://assets0.github.com/stylesheets/bundle_github.css?61b5039b1ce255c2a6acbff52acc1f9b426a05b2" media="screen" rel="stylesheet" type="text/css" />

    <script type="text/javascript" charset="utf-8">
      var GitHub = {}
      var github_user = null
      
    </script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
    <script src="http://assets2.github.com/javascripts/bundle_common.js?61b5039b1ce255c2a6acbff52acc1f9b426a05b2" type="text/javascript"></script>
<script src="http://assets3.github.com/javascripts/bundle_github.js?61b5039b1ce255c2a6acbff52acc1f9b426a05b2" type="text/javascript"></script>

        <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "pedromtavares/twitter_integration"
      })
    </script>

    
  
    
  

  <link href="http://github.com/pedromtavares/twitter_integration/commits/master.atom" rel="alternate" title="Recent Commits to twitter_integration:master" type="application/atom+xml" />

        <meta name="description" content="An example application to show a simple integration between Rails and Twitter" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "pedromtavares/twitter_integration";
      GitHub.currentRef = "master";
    </script>
  

            <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

  </head>

  

  <body>
    

    
      <script type="text/javascript">
        var _kmq = _kmq || [];
        function _kms(u){
          var s = document.createElement('script'); var f = document.getElementsByTagName('script')[0]; s.type = 'text/javascript'; s.async = true;
          s.src = u; f.parentNode.insertBefore(s, f);
        }
        _kms('//i.kissmetrics.com/i.js');_kms('//doug1izaerwt3.cloudfront.net/406e8bf3a2b8846ead55afb3cfaf6664523e3a54.1.js');
      </script>
    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="pageheaded">
        <div class="site">
          <div class="logo">
            <a href="http://github.com"><img src="/images/modules/header/logov3.png" alt="github" /></a>
          </div>
          
          <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <input type="search" class="search my_repos_autocompleter" name="q" results="5" placeholder="Search&hellip;" /> <input type="submit" value="Search" class="button" />
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
  
  
    <ul class="nav logged_out">
      
        <li><a href="http://github.com">Home</a></li>
        <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
        <li><a href="http://github.com/explore">Explore GitHub</a></li>
        
        <li><a href="/blog">Blog</a></li>
      
      <li><a href="https://github.com/login">Login</a></li>
    </ul>
  
</div>

        </div>
      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public   ">
        <h1>
          <a href="/pedromtavares">pedromtavares</a> / <strong><a href="http://github.com/pedromtavares/twitter_integration">twitter_integration</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/pedromtavares/twitter_integration/edit" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/pedromtavares/twitter_integration/toggle_watch" class="minibutton btn-watch " id="watch_button" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/pedromtavares/twitter_integration/toggle_watch" class="minibutton btn-watch " id="unwatch_button" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/pedromtavares/twitter_integration/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '8729cc1e2d7c810b7d41247c2ddd589e3a7258b1'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
          <li id="pull_request_item" class='ospr' style="display:none"><a href="/pedromtavares/twitter_integration/pull_request/" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
          

          <li><a href="#" class="minibutton btn-download " id="download_button"><span><span class="icon"></span>Download Source</span></a></li>
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/pedromtavares/twitter_integration/watchers" title="Watchers" class="tooltipped downwards">3</a></li>
          <li class="forks"><a href="/pedromtavares/twitter_integration/network" title="Forks" class="tooltipped downwards">2</a></li>
        </ul>
      </li>
    </ul>


        
  <ul class="tabs">
    <li><a href="http://github.com/pedromtavares/twitter_integration/tree/master" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="http://github.com/pedromtavares/twitter_integration/commits/master" highlight="repo_commits">Commits</a></li>

    
    <li><a href="/pedromtavares/twitter_integration/network" highlight="repo_network">Network (2)</a></li>

    

    
      
      <li><a href="/pedromtavares/twitter_integration/issues" highlight="issues">Issues (0)</a></li>
    

    
      
      <li><a href="/pedromtavares/twitter_integration/downloads">Downloads (0)</a></li>
    

    
      
      <li><a href="http://wiki.github.com/pedromtavares/twitter_integration/">Wiki (1)</a></li>
    

    <li><a href="/pedromtavares/twitter_integration/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/pedromtavares/twitter_integration/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  


        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

      

      <div id="repository_description" rel="repository_description_edit">
        
          <p>An example application to show a simple integration between Rails and Twitter
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>
      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/pedromtavares/twitter_integration/edit/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="8729cc1e2d7c810b7d41247c2ddd589e3a7258b1" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="An example application to show a simple integration between Rails and Twitter">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://pedromtavares.wordpress.com/2010/06/21/integrating-rails-with-twitter/" rel="nofollow">http://pedromtavares.wordpress.com/2010/06/21/integrating-rails-with-twitter/</a></p>
      </div>
      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/pedromtavares/twitter_integration/edit/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="8729cc1e2d7c810b7d41247c2ddd589e3a7258b1" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://pedromtavares.wordpress.com/2010/06/21/integrating-rails-with-twitter/">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      <div class="rule "></div>

      <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="http://github.com/pedromtavares/twitter_integration.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/pedromtavares/twitter_integration.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="http://assets2.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="http://assets2.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>


        

      </div><!-- /.pagehead -->

      









<script type="text/javascript">
  GitHub.currentCommitRef = "master"
  GitHub.currentRepoOwner = "pedromtavares"
  GitHub.currentRepo = "twitter_integration"
  GitHub.downloadRepo = '/pedromtavares/twitter_integration/archives/master'

  

  
</script>










  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/pedromtavares/twitter_integration/commit/3920c89942836b168d000334245238b157eefa9d">Fixing admin conditions[2]</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="http://www.gravatar.com/avatar/c71ed6668c95371453a2b786b22ef6ba?s=140&d=http%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name">Pedro Mateus Tavares <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2010-06-29 07:39:44">Tue Jun 29 07:39:44 -0700 2010</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/pedromtavares/twitter_integration/commit/3920c89942836b168d000334245238b157eefa9d" hotkey="c">3920c89942836b168d00</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/pedromtavares/twitter_integration/tree/3920c89942836b168d000334245238b157eefa9d" hotkey="t">f35aa92b038b601dbb20</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/pedromtavares/twitter_integration/tree/1b68940373524ebec0090bc2e2755f6062df37d5" hotkey="p">1b68940373524ebec009</a>
      

    </div>
  </div>

    </div>
  </div>



  
    <div id="path">
      <b><a href="/pedromtavares/twitter_integration/tree/master">twitter_integration</a></b> / <a href="/pedromtavares/twitter_integration/tree/master/public">public</a> / <a href="/pedromtavares/twitter_integration/tree/master/public/javascripts">javascripts</a> / jquery.NobleCount.js       <span style="display:none" id="clippy_3424">public/javascripts/jquery.NobleCount.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="http://assets2.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_3424&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="http://assets2.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_3424&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div id="files">
      <div class="file">
        <div class="meta">
          <div class="info">
            <span class="icon"><img alt="Txt" height="16" src="http://assets3.github.com/images/icons/txt.png?61b5039b1ce255c2a6acbff52acc1f9b426a05b2" width="16" /></span>
            <span class="mode" title="File Mode">100644</span>
            
              <span>481 lines (352 sloc)</span>
            
            <span>16.18 kb</span>
          </div>
          <ul class="actions">
            
              <li><a id="file-edit-link" href="#" rel="/pedromtavares/twitter_integration/file-edit/__ref__/public/javascripts/jquery.NobleCount.js">edit</a></li>
            
            <li><a href="/pedromtavares/twitter_integration/raw/master/public/javascripts/jquery.NobleCount.js" id="raw-url">raw</a></li>
            
              <li><a href="/pedromtavares/twitter_integration/blame/master/public/javascripts/jquery.NobleCount.js">blame</a></li>
            
            <li><a href="/pedromtavares/twitter_integration/commits/master/public/javascripts/jquery.NobleCount.js">history</a></li>
          </ul>
        </div>
        
  <div class="data syntax type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="LID1" rel="#L1">1</span>
<span id="LID2" rel="#L2">2</span>
<span id="LID3" rel="#L3">3</span>
<span id="LID4" rel="#L4">4</span>
<span id="LID5" rel="#L5">5</span>
<span id="LID6" rel="#L6">6</span>
<span id="LID7" rel="#L7">7</span>
<span id="LID8" rel="#L8">8</span>
<span id="LID9" rel="#L9">9</span>
<span id="LID10" rel="#L10">10</span>
<span id="LID11" rel="#L11">11</span>
<span id="LID12" rel="#L12">12</span>
<span id="LID13" rel="#L13">13</span>
<span id="LID14" rel="#L14">14</span>
<span id="LID15" rel="#L15">15</span>
<span id="LID16" rel="#L16">16</span>
<span id="LID17" rel="#L17">17</span>
<span id="LID18" rel="#L18">18</span>
<span id="LID19" rel="#L19">19</span>
<span id="LID20" rel="#L20">20</span>
<span id="LID21" rel="#L21">21</span>
<span id="LID22" rel="#L22">22</span>
<span id="LID23" rel="#L23">23</span>
<span id="LID24" rel="#L24">24</span>
<span id="LID25" rel="#L25">25</span>
<span id="LID26" rel="#L26">26</span>
<span id="LID27" rel="#L27">27</span>
<span id="LID28" rel="#L28">28</span>
<span id="LID29" rel="#L29">29</span>
<span id="LID30" rel="#L30">30</span>
<span id="LID31" rel="#L31">31</span>
<span id="LID32" rel="#L32">32</span>
<span id="LID33" rel="#L33">33</span>
<span id="LID34" rel="#L34">34</span>
<span id="LID35" rel="#L35">35</span>
<span id="LID36" rel="#L36">36</span>
<span id="LID37" rel="#L37">37</span>
<span id="LID38" rel="#L38">38</span>
<span id="LID39" rel="#L39">39</span>
<span id="LID40" rel="#L40">40</span>
<span id="LID41" rel="#L41">41</span>
<span id="LID42" rel="#L42">42</span>
<span id="LID43" rel="#L43">43</span>
<span id="LID44" rel="#L44">44</span>
<span id="LID45" rel="#L45">45</span>
<span id="LID46" rel="#L46">46</span>
<span id="LID47" rel="#L47">47</span>
<span id="LID48" rel="#L48">48</span>
<span id="LID49" rel="#L49">49</span>
<span id="LID50" rel="#L50">50</span>
<span id="LID51" rel="#L51">51</span>
<span id="LID52" rel="#L52">52</span>
<span id="LID53" rel="#L53">53</span>
<span id="LID54" rel="#L54">54</span>
<span id="LID55" rel="#L55">55</span>
<span id="LID56" rel="#L56">56</span>
<span id="LID57" rel="#L57">57</span>
<span id="LID58" rel="#L58">58</span>
<span id="LID59" rel="#L59">59</span>
<span id="LID60" rel="#L60">60</span>
<span id="LID61" rel="#L61">61</span>
<span id="LID62" rel="#L62">62</span>
<span id="LID63" rel="#L63">63</span>
<span id="LID64" rel="#L64">64</span>
<span id="LID65" rel="#L65">65</span>
<span id="LID66" rel="#L66">66</span>
<span id="LID67" rel="#L67">67</span>
<span id="LID68" rel="#L68">68</span>
<span id="LID69" rel="#L69">69</span>
<span id="LID70" rel="#L70">70</span>
<span id="LID71" rel="#L71">71</span>
<span id="LID72" rel="#L72">72</span>
<span id="LID73" rel="#L73">73</span>
<span id="LID74" rel="#L74">74</span>
<span id="LID75" rel="#L75">75</span>
<span id="LID76" rel="#L76">76</span>
<span id="LID77" rel="#L77">77</span>
<span id="LID78" rel="#L78">78</span>
<span id="LID79" rel="#L79">79</span>
<span id="LID80" rel="#L80">80</span>
<span id="LID81" rel="#L81">81</span>
<span id="LID82" rel="#L82">82</span>
<span id="LID83" rel="#L83">83</span>
<span id="LID84" rel="#L84">84</span>
<span id="LID85" rel="#L85">85</span>
<span id="LID86" rel="#L86">86</span>
<span id="LID87" rel="#L87">87</span>
<span id="LID88" rel="#L88">88</span>
<span id="LID89" rel="#L89">89</span>
<span id="LID90" rel="#L90">90</span>
<span id="LID91" rel="#L91">91</span>
<span id="LID92" rel="#L92">92</span>
<span id="LID93" rel="#L93">93</span>
<span id="LID94" rel="#L94">94</span>
<span id="LID95" rel="#L95">95</span>
<span id="LID96" rel="#L96">96</span>
<span id="LID97" rel="#L97">97</span>
<span id="LID98" rel="#L98">98</span>
<span id="LID99" rel="#L99">99</span>
<span id="LID100" rel="#L100">100</span>
<span id="LID101" rel="#L101">101</span>
<span id="LID102" rel="#L102">102</span>
<span id="LID103" rel="#L103">103</span>
<span id="LID104" rel="#L104">104</span>
<span id="LID105" rel="#L105">105</span>
<span id="LID106" rel="#L106">106</span>
<span id="LID107" rel="#L107">107</span>
<span id="LID108" rel="#L108">108</span>
<span id="LID109" rel="#L109">109</span>
<span id="LID110" rel="#L110">110</span>
<span id="LID111" rel="#L111">111</span>
<span id="LID112" rel="#L112">112</span>
<span id="LID113" rel="#L113">113</span>
<span id="LID114" rel="#L114">114</span>
<span id="LID115" rel="#L115">115</span>
<span id="LID116" rel="#L116">116</span>
<span id="LID117" rel="#L117">117</span>
<span id="LID118" rel="#L118">118</span>
<span id="LID119" rel="#L119">119</span>
<span id="LID120" rel="#L120">120</span>
<span id="LID121" rel="#L121">121</span>
<span id="LID122" rel="#L122">122</span>
<span id="LID123" rel="#L123">123</span>
<span id="LID124" rel="#L124">124</span>
<span id="LID125" rel="#L125">125</span>
<span id="LID126" rel="#L126">126</span>
<span id="LID127" rel="#L127">127</span>
<span id="LID128" rel="#L128">128</span>
<span id="LID129" rel="#L129">129</span>
<span id="LID130" rel="#L130">130</span>
<span id="LID131" rel="#L131">131</span>
<span id="LID132" rel="#L132">132</span>
<span id="LID133" rel="#L133">133</span>
<span id="LID134" rel="#L134">134</span>
<span id="LID135" rel="#L135">135</span>
<span id="LID136" rel="#L136">136</span>
<span id="LID137" rel="#L137">137</span>
<span id="LID138" rel="#L138">138</span>
<span id="LID139" rel="#L139">139</span>
<span id="LID140" rel="#L140">140</span>
<span id="LID141" rel="#L141">141</span>
<span id="LID142" rel="#L142">142</span>
<span id="LID143" rel="#L143">143</span>
<span id="LID144" rel="#L144">144</span>
<span id="LID145" rel="#L145">145</span>
<span id="LID146" rel="#L146">146</span>
<span id="LID147" rel="#L147">147</span>
<span id="LID148" rel="#L148">148</span>
<span id="LID149" rel="#L149">149</span>
<span id="LID150" rel="#L150">150</span>
<span id="LID151" rel="#L151">151</span>
<span id="LID152" rel="#L152">152</span>
<span id="LID153" rel="#L153">153</span>
<span id="LID154" rel="#L154">154</span>
<span id="LID155" rel="#L155">155</span>
<span id="LID156" rel="#L156">156</span>
<span id="LID157" rel="#L157">157</span>
<span id="LID158" rel="#L158">158</span>
<span id="LID159" rel="#L159">159</span>
<span id="LID160" rel="#L160">160</span>
<span id="LID161" rel="#L161">161</span>
<span id="LID162" rel="#L162">162</span>
<span id="LID163" rel="#L163">163</span>
<span id="LID164" rel="#L164">164</span>
<span id="LID165" rel="#L165">165</span>
<span id="LID166" rel="#L166">166</span>
<span id="LID167" rel="#L167">167</span>
<span id="LID168" rel="#L168">168</span>
<span id="LID169" rel="#L169">169</span>
<span id="LID170" rel="#L170">170</span>
<span id="LID171" rel="#L171">171</span>
<span id="LID172" rel="#L172">172</span>
<span id="LID173" rel="#L173">173</span>
<span id="LID174" rel="#L174">174</span>
<span id="LID175" rel="#L175">175</span>
<span id="LID176" rel="#L176">176</span>
<span id="LID177" rel="#L177">177</span>
<span id="LID178" rel="#L178">178</span>
<span id="LID179" rel="#L179">179</span>
<span id="LID180" rel="#L180">180</span>
<span id="LID181" rel="#L181">181</span>
<span id="LID182" rel="#L182">182</span>
<span id="LID183" rel="#L183">183</span>
<span id="LID184" rel="#L184">184</span>
<span id="LID185" rel="#L185">185</span>
<span id="LID186" rel="#L186">186</span>
<span id="LID187" rel="#L187">187</span>
<span id="LID188" rel="#L188">188</span>
<span id="LID189" rel="#L189">189</span>
<span id="LID190" rel="#L190">190</span>
<span id="LID191" rel="#L191">191</span>
<span id="LID192" rel="#L192">192</span>
<span id="LID193" rel="#L193">193</span>
<span id="LID194" rel="#L194">194</span>
<span id="LID195" rel="#L195">195</span>
<span id="LID196" rel="#L196">196</span>
<span id="LID197" rel="#L197">197</span>
<span id="LID198" rel="#L198">198</span>
<span id="LID199" rel="#L199">199</span>
<span id="LID200" rel="#L200">200</span>
<span id="LID201" rel="#L201">201</span>
<span id="LID202" rel="#L202">202</span>
<span id="LID203" rel="#L203">203</span>
<span id="LID204" rel="#L204">204</span>
<span id="LID205" rel="#L205">205</span>
<span id="LID206" rel="#L206">206</span>
<span id="LID207" rel="#L207">207</span>
<span id="LID208" rel="#L208">208</span>
<span id="LID209" rel="#L209">209</span>
<span id="LID210" rel="#L210">210</span>
<span id="LID211" rel="#L211">211</span>
<span id="LID212" rel="#L212">212</span>
<span id="LID213" rel="#L213">213</span>
<span id="LID214" rel="#L214">214</span>
<span id="LID215" rel="#L215">215</span>
<span id="LID216" rel="#L216">216</span>
<span id="LID217" rel="#L217">217</span>
<span id="LID218" rel="#L218">218</span>
<span id="LID219" rel="#L219">219</span>
<span id="LID220" rel="#L220">220</span>
<span id="LID221" rel="#L221">221</span>
<span id="LID222" rel="#L222">222</span>
<span id="LID223" rel="#L223">223</span>
<span id="LID224" rel="#L224">224</span>
<span id="LID225" rel="#L225">225</span>
<span id="LID226" rel="#L226">226</span>
<span id="LID227" rel="#L227">227</span>
<span id="LID228" rel="#L228">228</span>
<span id="LID229" rel="#L229">229</span>
<span id="LID230" rel="#L230">230</span>
<span id="LID231" rel="#L231">231</span>
<span id="LID232" rel="#L232">232</span>
<span id="LID233" rel="#L233">233</span>
<span id="LID234" rel="#L234">234</span>
<span id="LID235" rel="#L235">235</span>
<span id="LID236" rel="#L236">236</span>
<span id="LID237" rel="#L237">237</span>
<span id="LID238" rel="#L238">238</span>
<span id="LID239" rel="#L239">239</span>
<span id="LID240" rel="#L240">240</span>
<span id="LID241" rel="#L241">241</span>
<span id="LID242" rel="#L242">242</span>
<span id="LID243" rel="#L243">243</span>
<span id="LID244" rel="#L244">244</span>
<span id="LID245" rel="#L245">245</span>
<span id="LID246" rel="#L246">246</span>
<span id="LID247" rel="#L247">247</span>
<span id="LID248" rel="#L248">248</span>
<span id="LID249" rel="#L249">249</span>
<span id="LID250" rel="#L250">250</span>
<span id="LID251" rel="#L251">251</span>
<span id="LID252" rel="#L252">252</span>
<span id="LID253" rel="#L253">253</span>
<span id="LID254" rel="#L254">254</span>
<span id="LID255" rel="#L255">255</span>
<span id="LID256" rel="#L256">256</span>
<span id="LID257" rel="#L257">257</span>
<span id="LID258" rel="#L258">258</span>
<span id="LID259" rel="#L259">259</span>
<span id="LID260" rel="#L260">260</span>
<span id="LID261" rel="#L261">261</span>
<span id="LID262" rel="#L262">262</span>
<span id="LID263" rel="#L263">263</span>
<span id="LID264" rel="#L264">264</span>
<span id="LID265" rel="#L265">265</span>
<span id="LID266" rel="#L266">266</span>
<span id="LID267" rel="#L267">267</span>
<span id="LID268" rel="#L268">268</span>
<span id="LID269" rel="#L269">269</span>
<span id="LID270" rel="#L270">270</span>
<span id="LID271" rel="#L271">271</span>
<span id="LID272" rel="#L272">272</span>
<span id="LID273" rel="#L273">273</span>
<span id="LID274" rel="#L274">274</span>
<span id="LID275" rel="#L275">275</span>
<span id="LID276" rel="#L276">276</span>
<span id="LID277" rel="#L277">277</span>
<span id="LID278" rel="#L278">278</span>
<span id="LID279" rel="#L279">279</span>
<span id="LID280" rel="#L280">280</span>
<span id="LID281" rel="#L281">281</span>
<span id="LID282" rel="#L282">282</span>
<span id="LID283" rel="#L283">283</span>
<span id="LID284" rel="#L284">284</span>
<span id="LID285" rel="#L285">285</span>
<span id="LID286" rel="#L286">286</span>
<span id="LID287" rel="#L287">287</span>
<span id="LID288" rel="#L288">288</span>
<span id="LID289" rel="#L289">289</span>
<span id="LID290" rel="#L290">290</span>
<span id="LID291" rel="#L291">291</span>
<span id="LID292" rel="#L292">292</span>
<span id="LID293" rel="#L293">293</span>
<span id="LID294" rel="#L294">294</span>
<span id="LID295" rel="#L295">295</span>
<span id="LID296" rel="#L296">296</span>
<span id="LID297" rel="#L297">297</span>
<span id="LID298" rel="#L298">298</span>
<span id="LID299" rel="#L299">299</span>
<span id="LID300" rel="#L300">300</span>
<span id="LID301" rel="#L301">301</span>
<span id="LID302" rel="#L302">302</span>
<span id="LID303" rel="#L303">303</span>
<span id="LID304" rel="#L304">304</span>
<span id="LID305" rel="#L305">305</span>
<span id="LID306" rel="#L306">306</span>
<span id="LID307" rel="#L307">307</span>
<span id="LID308" rel="#L308">308</span>
<span id="LID309" rel="#L309">309</span>
<span id="LID310" rel="#L310">310</span>
<span id="LID311" rel="#L311">311</span>
<span id="LID312" rel="#L312">312</span>
<span id="LID313" rel="#L313">313</span>
<span id="LID314" rel="#L314">314</span>
<span id="LID315" rel="#L315">315</span>
<span id="LID316" rel="#L316">316</span>
<span id="LID317" rel="#L317">317</span>
<span id="LID318" rel="#L318">318</span>
<span id="LID319" rel="#L319">319</span>
<span id="LID320" rel="#L320">320</span>
<span id="LID321" rel="#L321">321</span>
<span id="LID322" rel="#L322">322</span>
<span id="LID323" rel="#L323">323</span>
<span id="LID324" rel="#L324">324</span>
<span id="LID325" rel="#L325">325</span>
<span id="LID326" rel="#L326">326</span>
<span id="LID327" rel="#L327">327</span>
<span id="LID328" rel="#L328">328</span>
<span id="LID329" rel="#L329">329</span>
<span id="LID330" rel="#L330">330</span>
<span id="LID331" rel="#L331">331</span>
<span id="LID332" rel="#L332">332</span>
<span id="LID333" rel="#L333">333</span>
<span id="LID334" rel="#L334">334</span>
<span id="LID335" rel="#L335">335</span>
<span id="LID336" rel="#L336">336</span>
<span id="LID337" rel="#L337">337</span>
<span id="LID338" rel="#L338">338</span>
<span id="LID339" rel="#L339">339</span>
<span id="LID340" rel="#L340">340</span>
<span id="LID341" rel="#L341">341</span>
<span id="LID342" rel="#L342">342</span>
<span id="LID343" rel="#L343">343</span>
<span id="LID344" rel="#L344">344</span>
<span id="LID345" rel="#L345">345</span>
<span id="LID346" rel="#L346">346</span>
<span id="LID347" rel="#L347">347</span>
<span id="LID348" rel="#L348">348</span>
<span id="LID349" rel="#L349">349</span>
<span id="LID350" rel="#L350">350</span>
<span id="LID351" rel="#L351">351</span>
<span id="LID352" rel="#L352">352</span>
<span id="LID353" rel="#L353">353</span>
<span id="LID354" rel="#L354">354</span>
<span id="LID355" rel="#L355">355</span>
<span id="LID356" rel="#L356">356</span>
<span id="LID357" rel="#L357">357</span>
<span id="LID358" rel="#L358">358</span>
<span id="LID359" rel="#L359">359</span>
<span id="LID360" rel="#L360">360</span>
<span id="LID361" rel="#L361">361</span>
<span id="LID362" rel="#L362">362</span>
<span id="LID363" rel="#L363">363</span>
<span id="LID364" rel="#L364">364</span>
<span id="LID365" rel="#L365">365</span>
<span id="LID366" rel="#L366">366</span>
<span id="LID367" rel="#L367">367</span>
<span id="LID368" rel="#L368">368</span>
<span id="LID369" rel="#L369">369</span>
<span id="LID370" rel="#L370">370</span>
<span id="LID371" rel="#L371">371</span>
<span id="LID372" rel="#L372">372</span>
<span id="LID373" rel="#L373">373</span>
<span id="LID374" rel="#L374">374</span>
<span id="LID375" rel="#L375">375</span>
<span id="LID376" rel="#L376">376</span>
<span id="LID377" rel="#L377">377</span>
<span id="LID378" rel="#L378">378</span>
<span id="LID379" rel="#L379">379</span>
<span id="LID380" rel="#L380">380</span>
<span id="LID381" rel="#L381">381</span>
<span id="LID382" rel="#L382">382</span>
<span id="LID383" rel="#L383">383</span>
<span id="LID384" rel="#L384">384</span>
<span id="LID385" rel="#L385">385</span>
<span id="LID386" rel="#L386">386</span>
<span id="LID387" rel="#L387">387</span>
<span id="LID388" rel="#L388">388</span>
<span id="LID389" rel="#L389">389</span>
<span id="LID390" rel="#L390">390</span>
<span id="LID391" rel="#L391">391</span>
<span id="LID392" rel="#L392">392</span>
<span id="LID393" rel="#L393">393</span>
<span id="LID394" rel="#L394">394</span>
<span id="LID395" rel="#L395">395</span>
<span id="LID396" rel="#L396">396</span>
<span id="LID397" rel="#L397">397</span>
<span id="LID398" rel="#L398">398</span>
<span id="LID399" rel="#L399">399</span>
<span id="LID400" rel="#L400">400</span>
<span id="LID401" rel="#L401">401</span>
<span id="LID402" rel="#L402">402</span>
<span id="LID403" rel="#L403">403</span>
<span id="LID404" rel="#L404">404</span>
<span id="LID405" rel="#L405">405</span>
<span id="LID406" rel="#L406">406</span>
<span id="LID407" rel="#L407">407</span>
<span id="LID408" rel="#L408">408</span>
<span id="LID409" rel="#L409">409</span>
<span id="LID410" rel="#L410">410</span>
<span id="LID411" rel="#L411">411</span>
<span id="LID412" rel="#L412">412</span>
<span id="LID413" rel="#L413">413</span>
<span id="LID414" rel="#L414">414</span>
<span id="LID415" rel="#L415">415</span>
<span id="LID416" rel="#L416">416</span>
<span id="LID417" rel="#L417">417</span>
<span id="LID418" rel="#L418">418</span>
<span id="LID419" rel="#L419">419</span>
<span id="LID420" rel="#L420">420</span>
<span id="LID421" rel="#L421">421</span>
<span id="LID422" rel="#L422">422</span>
<span id="LID423" rel="#L423">423</span>
<span id="LID424" rel="#L424">424</span>
<span id="LID425" rel="#L425">425</span>
<span id="LID426" rel="#L426">426</span>
<span id="LID427" rel="#L427">427</span>
<span id="LID428" rel="#L428">428</span>
<span id="LID429" rel="#L429">429</span>
<span id="LID430" rel="#L430">430</span>
<span id="LID431" rel="#L431">431</span>
<span id="LID432" rel="#L432">432</span>
<span id="LID433" rel="#L433">433</span>
<span id="LID434" rel="#L434">434</span>
<span id="LID435" rel="#L435">435</span>
<span id="LID436" rel="#L436">436</span>
<span id="LID437" rel="#L437">437</span>
<span id="LID438" rel="#L438">438</span>
<span id="LID439" rel="#L439">439</span>
<span id="LID440" rel="#L440">440</span>
<span id="LID441" rel="#L441">441</span>
<span id="LID442" rel="#L442">442</span>
<span id="LID443" rel="#L443">443</span>
<span id="LID444" rel="#L444">444</span>
<span id="LID445" rel="#L445">445</span>
<span id="LID446" rel="#L446">446</span>
<span id="LID447" rel="#L447">447</span>
<span id="LID448" rel="#L448">448</span>
<span id="LID449" rel="#L449">449</span>
<span id="LID450" rel="#L450">450</span>
<span id="LID451" rel="#L451">451</span>
<span id="LID452" rel="#L452">452</span>
<span id="LID453" rel="#L453">453</span>
<span id="LID454" rel="#L454">454</span>
<span id="LID455" rel="#L455">455</span>
<span id="LID456" rel="#L456">456</span>
<span id="LID457" rel="#L457">457</span>
<span id="LID458" rel="#L458">458</span>
<span id="LID459" rel="#L459">459</span>
<span id="LID460" rel="#L460">460</span>
<span id="LID461" rel="#L461">461</span>
<span id="LID462" rel="#L462">462</span>
<span id="LID463" rel="#L463">463</span>
<span id="LID464" rel="#L464">464</span>
<span id="LID465" rel="#L465">465</span>
<span id="LID466" rel="#L466">466</span>
<span id="LID467" rel="#L467">467</span>
<span id="LID468" rel="#L468">468</span>
<span id="LID469" rel="#L469">469</span>
<span id="LID470" rel="#L470">470</span>
<span id="LID471" rel="#L471">471</span>
<span id="LID472" rel="#L472">472</span>
<span id="LID473" rel="#L473">473</span>
<span id="LID474" rel="#L474">474</span>
<span id="LID475" rel="#L475">475</span>
<span id="LID476" rel="#L476">476</span>
<span id="LID477" rel="#L477">477</span>
<span id="LID478" rel="#L478">478</span>
<span id="LID479" rel="#L479">479</span>
<span id="LID480" rel="#L480">480</span>
<span id="LID481" rel="#L481">481</span>
</pre>
          </td>
          <td width="100%">
            
              <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/******************************************************************************************************</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">	jQuery.NobleCount</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">	Author Jeremy Horn</span></div><div class='line' id='LC6'><span class="cm">	Version 1.0</span></div><div class='line' id='LC7'><span class="cm">	Date: 3/21/2010</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">	Copyright (c) 2010 Jeremy Horn- jeremydhorn(at)gmail(dot)c0m | http://tpgblog.com</span></div><div class='line' id='LC10'><span class="cm">	Dual licensed under MIT and GPL.</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="cm">	DESCRIPTION</span></div><div class='line' id='LC13'><span class="cm">		NobleCount... for a more &#39;proper&#39; count of the characters remaining.</span></div><div class='line' id='LC14'><span class="cm">		</span></div><div class='line' id='LC15'><span class="cm">		NobleCount is a customizable jQuery plugin for a more the improved counting of the remaining </span></div><div class='line' id='LC16'><span class="cm">		characters, and resulting behaviors, of a text entry object, e.g. input textfield, textarea.</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="cm">		As text is entered into the target text area an object for the purposes of tracking</span></div><div class='line' id='LC19'><span class="cm">		the total number of characters remaining, defined as the maximum number of characters</span></div><div class='line' id='LC20'><span class="cm">		minus the current total number of characters within the text entry object, and storing</span></div><div class='line' id='LC21'><span class="cm">		that information visually and/or within the DOM as an HTML 5 compliant data-* attribute.</span></div><div class='line' id='LC22'><span class="cm">		</span></div><div class='line' id='LC23'><span class="cm">		Events and CSS Class alterations, if defined, are triggered based on current user </span></div><div class='line' id='LC24'><span class="cm">		interaction with the target text entry object as well as the current state (positive or </span></div><div class='line' id='LC25'><span class="cm">		negative) of the character remaining value.</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="cm">		NobleCount supports pre-existing text within the text object.</span></div><div class='line' id='LC28'><span class="cm">		NobleCount supports jQuery chaining.</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="cm">		Within NobleCount context...</span></div><div class='line' id='LC31'><span class="cm">			NEGATIVE is defined as Integers &lt; 0</span></div><div class='line' id='LC32'><span class="cm">			POSITIVE is defined as Integers &gt;= 0		[on_positive will fire when char_rem == 0]</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'><span class="cm">		BY DEFAULT</span></div><div class='line' id='LC35'><span class="cm">		 - maximum characters EQUAL 140 characters</span></div><div class='line' id='LC36'><span class="cm">		 - no events defined</span></div><div class='line' id='LC37'><span class="cm">		 - no class changes defined</span></div><div class='line' id='LC38'><span class="cm">		 - no DOM attributes are created/altered</span></div><div class='line' id='LC39'><span class="cm">		 - user permitted to type past the maximum number of characters limit, resulting in</span></div><div class='line' id='LC40'><span class="cm">		   negative number of characters remaining</span></div><div class='line' id='LC41'><span class="cm">	</span></div><div class='line' id='LC42'><span class="cm">	IMPLEMENTATION</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><span class="cm">		$(&#39;#textarea1&#39;).NobleCount(&#39;#characters_remaining1&#39;);</span></div><div class='line' id='LC45'><span class="cm">		$(&#39;#textfield2&#39;).NobleCount(&#39;#characters_remaining2&#39;, { / * OPTIONS * / });</span></div><div class='line' id='LC46'><span class="cm">		</span></div><div class='line' id='LC47'><span class="cm">	COMPATIBILITY</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'><span class="cm">		Tested in FF3.5, IE7</span></div><div class='line' id='LC50'><span class="cm">		With jQuery 1.3.x, 1.4.x</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'><span class="cm">	METHOD(S)</span></div><div class='line' id='LC53'><span class="cm">		To properly intialize, both the text entry object and the object that will store the</span></div><div class='line' id='LC54'><span class="cm">		total number of characters remaining must exist and be passed to NobleCount.</span></div><div class='line' id='LC55'><span class="cm">		</span></div><div class='line' id='LC56'><span class="cm">			$(TEXT_ENTRY_OBJECT).NobleCount(CHARACTERS_REMAINING_OBJECT);</span></div><div class='line' id='LC57'><span class="cm">		</span></div><div class='line' id='LC58'><span class="cm">		Any callback functions assigned to any of the availale events are passed the following</span></div><div class='line' id='LC59'><span class="cm">		parameters: t_obj, char_area, c_settings, char_rem</span></div><div class='line' id='LC60'><span class="cm">		</span></div><div class='line' id='LC61'><span class="cm">			t_obj			text entry object</span></div><div class='line' id='LC62'><span class="cm">			</span></div><div class='line' id='LC63'><span class="cm">			char_area		selection of the characters remaining object</span></div><div class='line' id='LC64'><span class="cm">			</span></div><div class='line' id='LC65'><span class="cm">			c_settings		result of the options passed into NobleCount at time of </span></div><div class='line' id='LC66'><span class="cm">							initialization merged with the default options</span></div><div class='line' id='LC67'><span class="cm">							</span></div><div class='line' id='LC68'><span class="cm">							** this is a GREAT way to pass in and remember other state</span></div><div class='line' id='LC69'><span class="cm">							information that will be needed upon the triggering of</span></div><div class='line' id='LC70'><span class="cm">							NobleCount events **</span></div><div class='line' id='LC71'><span class="cm">			</span></div><div class='line' id='LC72'><span class="cm">			char_rem		integer representation of the total number of characters</span></div><div class='line' id='LC73'><span class="cm">							remaining resulting from the calculated difference between</span></div><div class='line' id='LC74'><span class="cm">							the target maximum number of characters and the current</span></div><div class='line' id='LC75'><span class="cm">							number of characters currently within t_obj</span></div><div class='line' id='LC76'><span class="cm">		</span></div><div class='line' id='LC77'><span class="cm">		Both TEXT_ENTRY_OBJECT and CHARACTERS_REMAINING_OBJECT must be specified and valid.</span></div><div class='line' id='LC78'><span class="cm">		</span></div><div class='line' id='LC79'><span class="cm">		Upon successful initialization, all appropriate events and classes are applied to</span></div><div class='line' id='LC80'><span class="cm">		the CHARACTERS_REMAINING_OBJECT, including the storage (if not disabled) visually</span></div><div class='line' id='LC81'><span class="cm">		or only in the DOM (if enabled) of the integer representing the number of characters</span></div><div class='line' id='LC82'><span class="cm">		remaining.</span></div><div class='line' id='LC83'><span class="cm">		</span></div><div class='line' id='LC84'><span class="cm">		The target maximum number of characters (max_chars) are determined by the following </span></div><div class='line' id='LC85'><span class="cm">		precedence rules....</span></div><div class='line' id='LC86'><span class="cm">		</span></div><div class='line' id='LC87'><span class="cm">				if max_chars passed via constructor</span></div><div class='line' id='LC88'><span class="cm">					max_chars = max_chars passed</span></div><div class='line' id='LC89'><span class="cm">				else if number exists within characters_remaining object and number &gt; 0</span></div><div class='line' id='LC90'><span class="cm">					max_chars = number within the text() of characters_remaining object</span></div><div class='line' id='LC91'><span class="cm">				else use the NobleCount&#39;s default max_chars</span></div><div class='line' id='LC92'><span class="cm">		</span></div><div class='line' id='LC93'><span class="cm">	CUSTOMIZATION</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'><span class="cm">		NobleCount(c_obj, &lt;OPTIONS&gt;)</span></div><div class='line' id='LC96'><span class="cm">		e.g. $(t_obj).NobleCount(c_obj, {max_chars:100px});</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'><span class="cm">		on_negative				class (STRING) or FUNCTION that is applied/called </span></div><div class='line' id='LC100'><span class="cm">								when characters remaining is negative IF DEFINED</span></div><div class='line' id='LC101'><span class="cm">									</span></div><div class='line' id='LC102'><span class="cm">		on_positive				class (STRING) or FUNCTION that is applied/called </span></div><div class='line' id='LC103'><span class="cm">								when characters remaining is positive IF DEFINED</span></div><div class='line' id='LC104'><span class="cm">									</span></div><div class='line' id='LC105'><span class="cm">		on_update				FUNCTION that is called when characters remaining changes</span></div><div class='line' id='LC106'><span class="cm">								</span></div><div class='line' id='LC107'><span class="cm">		max_chars				target maximum number of characters</span></div><div class='line' id='LC108'><span class="cm">		</span></div><div class='line' id='LC109'><span class="cm">		block_negative			if TRUE, then all attempts are made to block entering </span></div><div class='line' id='LC110'><span class="cm">									more than max_characters; not effective against user</span></div><div class='line' id='LC111'><span class="cm">									pasting in blocks of text that exceed the max_chars value</span></div><div class='line' id='LC112'><span class="cm">								otherwise, text area will let individual entering the text</span></div><div class='line' id='LC113'><span class="cm">									to exceed max_chars limit (characters remaining becomes</span></div><div class='line' id='LC114'><span class="cm">									negative)</span></div><div class='line' id='LC115'><span class="cm">								</span></div><div class='line' id='LC116'><span class="cm">		cloak: false,			if TRUE, then no visual updates of characters remaining </span></div><div class='line' id='LC117'><span class="cm">									object (c_obj) will occur; this does not have any effect</span></div><div class='line' id='LC118'><span class="cm">									on the char_rem value returned via any event callbacks</span></div><div class='line' id='LC119'><span class="cm">								otherwise, the text within c_obj is constantly updated to</span></div><div class='line' id='LC120'><span class="cm">									represent the total number of characters remaining until</span></div><div class='line' id='LC121'><span class="cm">									the max_chars limit has been reached</span></div><div class='line' id='LC122'><span class="cm">								  </span></div><div class='line' id='LC123'><span class="cm">		in_dom: false			if TRUE and cloak is ALSO TRUE, then the number of characters</span></div><div class='line' id='LC124'><span class="cm">									remaining are stored as the attribute of c_obj</span></div><div class='line' id='LC125'><span class="cm">									named &#39;data-noblecount&#39;</span></div><div class='line' id='LC126'><span class="cm">									</span></div><div class='line' id='LC127'><span class="cm">									!NOTE: if enabled, due to constant updating of a DOM element</span></div><div class='line' id='LC128'><span class="cm">										attribute user experience can appear sluggish while</span></div><div class='line' id='LC129'><span class="cm">										the individual is modifying the text entry object (t_obj)</span></div><div class='line' id='LC130'><span class="cm">								</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'><span class="cm">		EXAMPLE	OPTIONS = </span></div><div class='line' id='LC133'><span class="cm">			{</span></div><div class='line' id='LC134'><span class="cm">				on_negative: &#39;go_red&#39;,</span></div><div class='line' id='LC135'><span class="cm">				on_positive: &#39;go_green&#39;,</span></div><div class='line' id='LC136'><span class="cm">				max_chars: 25,</span></div><div class='line' id='LC137'><span class="cm">				on_update: function(t_obj, char_area, c_settings, char_rem){</span></div><div class='line' id='LC138'><span class="cm">					if ((char_rem % 10) == 0) {</span></div><div class='line' id='LC139'><span class="cm">						char_area.css(&#39;font-weight&#39;, &#39;bold&#39;);</span></div><div class='line' id='LC140'><span class="cm">						char_area.css(&#39;font-size&#39;, &#39;300%&#39;);</span></div><div class='line' id='LC141'><span class="cm">					} else {</span></div><div class='line' id='LC142'><span class="cm">						char_area.css(&#39;font-weight&#39;, &#39;normal&#39;);</span></div><div class='line' id='LC143'><span class="cm">						char_area.css(&#39;font-size&#39;, &#39;100%&#39;);</span></div><div class='line' id='LC144'><span class="cm">					}</span></div><div class='line' id='LC145'><span class="cm">				}</span></div><div class='line' id='LC146'><span class="cm">			};</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'><span class="cm">	MORE</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'><span class="cm">		For more details about NobleCount, its implementation, usage, and examples, go to:</span></div><div class='line' id='LC151'><span class="cm">		http://tpgblog.com/noblecount/</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'><span class="cm">******************************************************************************************************/</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'><span class="cm">		FUNCTION</span></div><div class='line' id='LC160'><span class="cm">			NobleCount</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC163'><span class="cm">			NobleCount method constructor</span></div><div class='line' id='LC164'><span class="cm">			</span></div><div class='line' id='LC165'><span class="cm">			allows for customization of maximum length and related update/length</span></div><div class='line' id='LC166'><span class="cm">			behaviors</span></div><div class='line' id='LC167'><span class="cm">			</span></div><div class='line' id='LC168'><span class="cm">				e.g. $(text_obj).NobleCount(characters_remaining_obj);</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'><span class="cm">			REQUIRED: c_obj</span></div><div class='line' id='LC171'><span class="cm">			OPTIONAL: options</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">NobleCount</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">c_obj</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'>		<span class="kd">var</span> <span class="nx">c_settings</span><span class="p">;</span></div><div class='line' id='LC177'>		<span class="kd">var</span> <span class="nx">mc_passed</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>		<span class="c1">// if c_obj is not specified, then nothing to do here</span></div><div class='line' id='LC180'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">c_obj</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>			<span class="c1">// check for new &amp; valid options</span></div><div class='line' id='LC182'>			<span class="nx">c_settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">NobleCount</span><span class="p">.</span><span class="nx">settings</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>			<span class="c1">// was max_chars passed via options parameter? </span></div><div class='line' id='LC185'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'>				<span class="nx">mc_passed</span> <span class="o">=</span> <span class="p">((</span><span class="k">typeof</span> <span class="nx">options</span><span class="p">.</span><span class="nx">max_chars</span> <span class="o">==</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC187'>			<span class="p">}</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>			<span class="c1">// process all provided objects</span></div><div class='line' id='LC190'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC191'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>				<span class="c1">// attach events to c_obj</span></div><div class='line' id='LC194'>				<span class="nx">attach_nobility</span><span class="p">(</span><span class="nx">$this</span><span class="p">,</span> <span class="nx">c_obj</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">mc_passed</span><span class="p">);</span></div><div class='line' id='LC195'>			<span class="p">});</span></div><div class='line' id='LC196'>		<span class="p">}</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC199'>	<span class="p">};</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'><span class="cm">		FUNCTION</span></div><div class='line' id='LC205'><span class="cm">			NobleCount.settings</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC208'><span class="cm">			publically accessible data stucture containing the max_chars and </span></div><div class='line' id='LC209'><span class="cm">			event handling specifications for NobleCount</span></div><div class='line' id='LC210'><span class="cm">			</span></div><div class='line' id='LC211'><span class="cm">			can be directly accessed by	&#39;$.fn.NobleCount.settings = ... ;&#39;</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC214'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">NobleCount</span><span class="p">.</span><span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>		<span class="nx">on_negative</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>		<span class="c1">// class (STRING) or FUNCTION that is applied/called </span></div><div class='line' id='LC217'>								<span class="c1">// 		when characters remaining is negative</span></div><div class='line' id='LC218'>		<span class="nx">on_positive</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>		<span class="c1">// class (STRING) or FUNCTION that is applied/called </span></div><div class='line' id='LC219'>								<span class="c1">// 		when characters remaining is positive</span></div><div class='line' id='LC220'>		<span class="nx">on_update</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span>		<span class="c1">// FUNCTION that is called when characters remaining </span></div><div class='line' id='LC221'>								<span class="c1">// 		changes</span></div><div class='line' id='LC222'>		<span class="nx">max_chars</span><span class="o">:</span> <span class="mi">140</span><span class="p">,</span>			<span class="c1">// maximum number of characters</span></div><div class='line' id='LC223'>		<span class="nx">block_negative</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>  <span class="c1">// if true, then all attempts are made to block entering </span></div><div class='line' id='LC224'>								<span class="c1">//		more than max_characters</span></div><div class='line' id='LC225'>		<span class="nx">cloak</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>			<span class="c1">// if true, then no visual updates of characters </span></div><div class='line' id='LC226'>								<span class="c1">// 		remaining (c_obj) occur</span></div><div class='line' id='LC227'>		<span class="nx">in_dom</span><span class="o">:</span> <span class="kc">false</span>			<span class="c1">// if true and cloak == true, then number of characters</span></div><div class='line' id='LC228'>								<span class="c1">//		remaining are stored as the attribute</span></div><div class='line' id='LC229'>								<span class="c1">//		&#39;data-noblecount&#39; of c_obj</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>	<span class="p">};</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>	<span class="c1">//////////////////////////////////////////////////////////////////////////////////</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>	<span class="c1">// private functions and settings</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'><span class="cm">		FUNCTION</span></div><div class='line' id='LC241'><span class="cm">			attach_nobility</span></div><div class='line' id='LC242'><span class="cm">	</span></div><div class='line' id='LC243'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC244'><span class="cm">			performs all initialization routines and display initiation</span></div><div class='line' id='LC245'><span class="cm">			</span></div><div class='line' id='LC246'><span class="cm">			assigns both the keyup and keydown events to the target text entry</span></div><div class='line' id='LC247'><span class="cm">			object; both keyup and keydown are used to provide the smoothest</span></div><div class='line' id='LC248'><span class="cm">			user experience</span></div><div class='line' id='LC249'><span class="cm">	</span></div><div class='line' id='LC250'><span class="cm">				if max_chars_passed via constructor</span></div><div class='line' id='LC251'><span class="cm">					max_chars = max_chars_passed</span></div><div class='line' id='LC252'><span class="cm">				else if number exists within counting_object (and number &gt; 0)</span></div><div class='line' id='LC253'><span class="cm">					max_chars = counting_object.number</span></div><div class='line' id='LC254'><span class="cm">				else use default max_chars</span></div><div class='line' id='LC255'><span class="cm">	</span></div><div class='line' id='LC256'><span class="cm">		PRE</span></div><div class='line' id='LC257'><span class="cm">			t_obj and c_obj EXIST</span></div><div class='line' id='LC258'><span class="cm">			c_settings and mc_passed initialized</span></div><div class='line' id='LC259'><span class="cm">			</span></div><div class='line' id='LC260'><span class="cm">		POST</span></div><div class='line' id='LC261'><span class="cm">			maximum number of characters for t_obj calculated and stored in max_char</span></div><div class='line' id='LC262'><span class="cm">			key events attached to t_obj</span></div><div class='line' id='LC263'><span class="cm">	</span></div><div class='line' id='LC264'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>	<span class="kd">function</span> <span class="nx">attach_nobility</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">c_obj</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">mc_passed</span><span class="p">){</span></div><div class='line' id='LC267'>		<span class="kd">var</span> <span class="nx">max_char</span> 	<span class="o">=</span> <span class="nx">c_settings</span><span class="p">.</span><span class="nx">max_chars</span><span class="p">;</span></div><div class='line' id='LC268'>		<span class="kd">var</span> <span class="nx">char_area</span>	<span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">c_obj</span><span class="p">);</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>		<span class="c1">// first determine if max_char needs adjustment</span></div><div class='line' id='LC271'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">mc_passed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC272'>			<span class="kd">var</span> <span class="nx">tmp_num</span> <span class="o">=</span> <span class="nx">char_area</span><span class="p">.</span><span class="nx">text</span><span class="p">();</span></div><div class='line' id='LC273'>			<span class="kd">var</span> <span class="nx">isPosNumber</span> <span class="o">=</span> <span class="p">(</span><span class="sr">/^[1-9]\d*$/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">tmp_num</span><span class="p">);</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'>			<span class="k">if</span> <span class="p">(</span><span class="nx">isPosNumber</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'>				<span class="nx">max_char</span> <span class="o">=</span> <span class="nx">tmp_num</span><span class="p">;</span></div><div class='line' id='LC277'>			<span class="p">}</span></div><div class='line' id='LC278'>		<span class="p">}</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>		<span class="c1">// initialize display of characters remaining</span></div><div class='line' id='LC281'>		<span class="c1">// * note: initializing should not trigger on_update</span></div><div class='line' id='LC282'>		<span class="nx">event_internals</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC283'><br/></div><div class='line' id='LC284'>		<span class="c1">// then attach the events -- seem to work better than keypress</span></div><div class='line' id='LC285'>		<span class="nx">$</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">).</span><span class="nx">keydown</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC286'>			<span class="nx">event_internals</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>			<span class="c1">// to block text entry, return false</span></div><div class='line' id='LC289'>			<span class="k">if</span> <span class="p">(</span><span class="nx">check_block_negative</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t_obj</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">)</span> <span class="o">==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC291'>			<span class="p">}</span> </div><div class='line' id='LC292'>		<span class="p">});</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>		<span class="nx">$</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">).</span><span class="nx">keyup</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>			<span class="nx">event_internals</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>			<span class="c1">// to block text entry, return false</span></div><div class='line' id='LC298'>			<span class="k">if</span> <span class="p">(</span><span class="nx">check_block_negative</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t_obj</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">)</span> <span class="o">==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC300'>			<span class="p">}</span> </div><div class='line' id='LC301'>		<span class="p">});</span></div><div class='line' id='LC302'>	<span class="p">}</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'><span class="cm">		FUNCTION</span></div><div class='line' id='LC308'><span class="cm">			check_block_negative</span></div><div class='line' id='LC309'><span class="cm">	</span></div><div class='line' id='LC310'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC311'><span class="cm">			determines whether or not text entry within t_obj should be prevented</span></div><div class='line' id='LC312'><span class="cm">			</span></div><div class='line' id='LC313'><span class="cm">		PRE</span></div><div class='line' id='LC314'><span class="cm">			e EXISTS</span></div><div class='line' id='LC315'><span class="cm">			t_obj VALID</span></div><div class='line' id='LC316'><span class="cm">			c_settings and max_char initialized / calculated</span></div><div class='line' id='LC317'><span class="cm">			</span></div><div class='line' id='LC318'><span class="cm">		POST</span></div><div class='line' id='LC319'><span class="cm">			if t_obj text entry should be prevented FALSE is returned</span></div><div class='line' id='LC320'><span class="cm">				otherwise TRUE returned</span></div><div class='line' id='LC321'><span class="cm">	</span></div><div class='line' id='LC322'><span class="cm">		TODO</span></div><div class='line' id='LC323'><span class="cm">			improve selection detection and permissible behaviors experience</span></div><div class='line' id='LC324'><span class="cm">			ALSO</span></div><div class='line' id='LC325'><span class="cm">				doesnt CURRENTLY block from the pasting of large chunks of text that </span></div><div class='line' id='LC326'><span class="cm">				exceed max_char</span></div><div class='line' id='LC327'><span class="cm">		</span></div><div class='line' id='LC328'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>	<span class="kd">function</span> <span class="nx">check_block_negative</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t_obj</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">){</span></div><div class='line' id='LC331'>		<span class="k">if</span> <span class="p">(</span><span class="nx">c_settings</span><span class="p">.</span><span class="nx">block_negative</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>			<span class="kd">var</span> <span class="nx">char_code</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">which</span><span class="p">;</span></div><div class='line' id='LC333'>			<span class="kd">var</span> <span class="nx">selected</span><span class="p">;</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>			<span class="c1">// goofy handling required to work in both IE and FF</span></div><div class='line' id='LC336'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">document</span><span class="p">.</span><span class="nx">selection</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>				<span class="nx">selected</span> <span class="o">=</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">selection</span><span class="p">.</span><span class="nx">createRange</span><span class="p">().</span><span class="nx">text</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC338'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC339'>				<span class="nx">selected</span> <span class="o">=</span> <span class="p">(</span><span class="nx">t_obj</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">selectionStart</span> <span class="o">!=</span> <span class="nx">t_obj</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">selectionEnd</span><span class="p">);</span></div><div class='line' id='LC340'>			<span class="p">}</span></div><div class='line' id='LC341'><br/></div><div class='line' id='LC342'>			<span class="c1">//return false if can&#39;t write more  </span></div><div class='line' id='LC343'>			<span class="k">if</span> <span class="p">((</span><span class="o">!</span><span class="p">((</span><span class="nx">find_remaining</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC344'>				<span class="p">(</span><span class="nx">char_code</span> <span class="o">&gt;</span> <span class="mi">47</span> <span class="o">||</span> <span class="nx">char_code</span> <span class="o">==</span> <span class="mi">32</span> <span class="o">||</span> <span class="nx">char_code</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">char_code</span> <span class="o">==</span> <span class="mi">13</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC345'>				<span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC346'>				<span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">altKey</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC347'>				<span class="o">!</span><span class="nx">selected</span><span class="p">))</span> <span class="o">==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC348'><br/></div><div class='line' id='LC349'>				<span class="c1">// block text entry</span></div><div class='line' id='LC350'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC351'>			<span class="p">}</span></div><div class='line' id='LC352'>		<span class="p">}</span></div><div class='line' id='LC353'><br/></div><div class='line' id='LC354'>		<span class="c1">// allow text entry</span></div><div class='line' id='LC355'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC356'>	<span class="p">}</span></div><div class='line' id='LC357'><br/></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'><span class="cm">		FUNCTION</span></div><div class='line' id='LC362'><span class="cm">			find_remaining</span></div><div class='line' id='LC363'><span class="cm">	</span></div><div class='line' id='LC364'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC365'><span class="cm">			determines of the number of characters permitted (max_char), the number of </span></div><div class='line' id='LC366'><span class="cm">			characters remaining until that limit has been reached  </span></div><div class='line' id='LC367'><span class="cm">	</span></div><div class='line' id='LC368'><span class="cm">		PRE</span></div><div class='line' id='LC369'><span class="cm">			t_obj and max_char EXIST and are VALID</span></div><div class='line' id='LC370'><span class="cm">			</span></div><div class='line' id='LC371'><span class="cm">		POST</span></div><div class='line' id='LC372'><span class="cm">			returns integer of the difference between max_char and total number of</span></div><div class='line' id='LC373'><span class="cm">			characters within the text entry object (t_obj)</span></div><div class='line' id='LC374'><span class="cm">	</span></div><div class='line' id='LC375'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>	<span class="kd">function</span> <span class="nx">find_remaining</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">){</span></div><div class='line' id='LC378'>		<span class="k">return</span> <span class="nx">max_char</span> <span class="o">-</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">).</span><span class="nx">val</span><span class="p">()).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC379'>	<span class="p">}</span></div><div class='line' id='LC380'><br/></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'><span class="cm">		FUNCTION</span></div><div class='line' id='LC385'><span class="cm">			event_internals</span></div><div class='line' id='LC386'><span class="cm">	</span></div><div class='line' id='LC387'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC388'><span class="cm">			primarily used for the calculation of appropriate behavior resulting from</span></div><div class='line' id='LC389'><span class="cm">			any event attached to the text entry object (t_obj)</span></div><div class='line' id='LC390'><span class="cm">	</span></div><div class='line' id='LC391'><span class="cm">			whenever the char_rem and related display and/or DOM information needs</span></div><div class='line' id='LC392'><span class="cm">			updating this function is called</span></div><div class='line' id='LC393'><br/></div><div class='line' id='LC394'><span class="cm">			if cloaking is being used, then no visual representation of the characters</span></div><div class='line' id='LC395'><span class="cm">			remaining, nor attempt by this plugin to change any of its visual </span></div><div class='line' id='LC396'><span class="cm">			characteristics will occur</span></div><div class='line' id='LC397'><span class="cm">			</span></div><div class='line' id='LC398'><span class="cm">			if cloaking and in_dom are both TRUE, then the number of characters </span></div><div class='line' id='LC399'><span class="cm">			remaining are stored within the HTML 5 compliant attribute of the</span></div><div class='line' id='LC400'><span class="cm">			character count remaining object (c_obj) labeled &#39;data-noblecount&#39;</span></div><div class='line' id='LC401'><span class="cm">			</span></div><div class='line' id='LC402'><span class="cm">		PRE</span></div><div class='line' id='LC403'><span class="cm">			c_settings, init_disp initialized</span></div><div class='line' id='LC404'><span class="cm">			</span></div><div class='line' id='LC405'><span class="cm">		POST</span></div><div class='line' id='LC406'><span class="cm">			performs all updates to the DOM visual and otherwise required</span></div><div class='line' id='LC407'><span class="cm">			performs all relevant function calls</span></div><div class='line' id='LC408'><span class="cm">	</span></div><div class='line' id='LC409'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'>	<span class="kd">function</span> <span class="nx">event_internals</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">,</span> <span class="nx">init_disp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC412'>		<span class="kd">var</span> <span class="nx">char_rem</span>	<span class="o">=</span> <span class="nx">find_remaining</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">max_char</span><span class="p">);</span></div><div class='line' id='LC413'><br/></div><div class='line' id='LC414'>		<span class="c1">// is chararacters remaining positive or negative</span></div><div class='line' id='LC415'>		<span class="k">if</span> <span class="p">(</span><span class="nx">char_rem</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC416'>			<span class="nx">toggle_states</span><span class="p">(</span><span class="nx">c_settings</span><span class="p">.</span><span class="nx">on_negative</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">.</span><span class="nx">on_positive</span><span class="p">,</span> <span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">char_rem</span><span class="p">);</span></div><div class='line' id='LC417'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC418'>			<span class="nx">toggle_states</span><span class="p">(</span><span class="nx">c_settings</span><span class="p">.</span><span class="nx">on_positive</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">.</span><span class="nx">on_negative</span><span class="p">,</span> <span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">char_rem</span><span class="p">);</span></div><div class='line' id='LC419'>		<span class="p">}</span></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'>		<span class="c1">// determine whether or not to update the text of the char_area (or c_obj)</span></div><div class='line' id='LC422'>		<span class="k">if</span> <span class="p">(</span><span class="nx">c_settings</span><span class="p">.</span><span class="nx">cloak</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC423'>			<span class="c1">// this slows stuff down quite a bit; TODO: implement better method of publically accessible data storage</span></div><div class='line' id='LC424'>			<span class="k">if</span> <span class="p">(</span><span class="nx">c_settings</span><span class="p">.</span><span class="nx">in_dom</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC425'>				<span class="nx">char_area</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-noblecount&#39;</span><span class="p">,</span> <span class="nx">char_rem</span><span class="p">);</span></div><div class='line' id='LC426'>			<span class="p">}</span></div><div class='line' id='LC427'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC428'>			<span class="c1">// show the numbers of characters remaining </span></div><div class='line' id='LC429'>			<span class="nx">char_area</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">char_rem</span><span class="p">);</span></div><div class='line' id='LC430'>		<span class="p">}</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>		<span class="c1">// if event_internals isn&#39;t being called for initialization purposes and</span></div><div class='line' id='LC433'>		<span class="c1">// on_update is a properly defined function then call it on this update</span></div><div class='line' id='LC434'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">init_disp</span> <span class="o">&amp;&amp;</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">c_settings</span><span class="p">.</span><span class="nx">on_update</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC435'>			<span class="nx">c_settings</span><span class="p">.</span><span class="nx">on_update</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">char_rem</span><span class="p">);</span></div><div class='line' id='LC436'>		<span class="p">}</span> </div><div class='line' id='LC437'>	<span class="p">}</span></div><div class='line' id='LC438'><br/></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'>	<span class="cm">/**********************************************************************************</span></div><div class='line' id='LC441'><br/></div><div class='line' id='LC442'><span class="cm">		FUNCTION</span></div><div class='line' id='LC443'><span class="cm">			toggle_states</span></div><div class='line' id='LC444'><span class="cm">	</span></div><div class='line' id='LC445'><span class="cm">		DESCRIPTION</span></div><div class='line' id='LC446'><span class="cm">			performs the toggling operations between the watched positive and negative</span></div><div class='line' id='LC447'><span class="cm">			characteristics</span></div><div class='line' id='LC448'><span class="cm">			</span></div><div class='line' id='LC449'><span class="cm">			first, enables/triggers/executes the toggle_on behavior/class</span></div><div class='line' id='LC450'><span class="cm">			second, disables the trigger_off class</span></div><div class='line' id='LC451'><span class="cm">	</span></div><div class='line' id='LC452'><span class="cm">		PRE</span></div><div class='line' id='LC453'><span class="cm">			toggle_on, toggle_off</span></div><div class='line' id='LC454'><span class="cm">				IF DEFINED, </span></div><div class='line' id='LC455'><span class="cm">					must be a string representation of a VALID class</span></div><div class='line' id='LC456'><span class="cm">					OR</span></div><div class='line' id='LC457'><span class="cm">					must be a VALID function </span></div><div class='line' id='LC458'><span class="cm">			</span></div><div class='line' id='LC459'><span class="cm">		POST</span></div><div class='line' id='LC460'><span class="cm">			toggle_on objects have been applied/executed</span></div><div class='line' id='LC461'><span class="cm">			toggle_off class has been removed (if it is a class)</span></div><div class='line' id='LC462'><span class="cm">	</span></div><div class='line' id='LC463'><span class="cm">	**********************************************************************************/</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>	<span class="kd">function</span> <span class="nx">toggle_states</span><span class="p">(</span><span class="nx">toggle_on</span><span class="p">,</span> <span class="nx">toggle_off</span><span class="p">,</span> <span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">char_rem</span><span class="p">){</span></div><div class='line' id='LC466'>		<span class="k">if</span> <span class="p">(</span><span class="nx">toggle_on</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC467'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">toggle_on</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC468'>				<span class="nx">char_area</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">toggle_on</span><span class="p">);</span>				</div><div class='line' id='LC469'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">toggle_on</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC470'>				<span class="nx">toggle_on</span><span class="p">(</span><span class="nx">t_obj</span><span class="p">,</span> <span class="nx">char_area</span><span class="p">,</span> <span class="nx">c_settings</span><span class="p">,</span> <span class="nx">char_rem</span><span class="p">);</span></div><div class='line' id='LC471'>			<span class="p">}</span></div><div class='line' id='LC472'>		<span class="p">}</span></div><div class='line' id='LC473'><br/></div><div class='line' id='LC474'>		<span class="k">if</span> <span class="p">(</span><span class="nx">toggle_off</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC475'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">toggle_off</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC476'>				<span class="nx">char_area</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">toggle_off</span><span class="p">);</span>				</div><div class='line' id='LC477'>			<span class="p">}</span></div><div class='line' id='LC478'>		<span class="p">}</span>		</div><div class='line' id='LC479'>	<span class="p">}</span></div><div class='line' id='LC480'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC481'><br/></div></pre></div>
            
          </td>
        </tr>
      </table>
    
  </div>


      </div>
    </div>

  


    </div>
  
      

      <div class="push"></div>
    </div>

    <div id="footer">
      <div class="site">
        <div class="info">
          <div class="locales">
            
            
          </div>
          <div class="links">
            <a href="http://github.com/blog"><b>Blog</b></a> |
            <a href="http://support.github.com">Support</a> |
            <a href="http://github.com/training">Training</a> |
            <a href="http://github.com/contact">Contact</a> |
            <a href="http://develop.github.com">API</a> |
            <a href="http://status.github.com">Status</a> |
            <a href="http://twitter.com/github">Twitter</a> |
            <a href="http://help.github.com">Help</a> |
            <a href="http://github.com/security">Security</a>
          </div>
          <div class="company">
            &copy;
            2010
            <span id="_rrt" title="0.06812s from fe3.rs.github.com">GitHub</span> Inc.
            All rights reserved. |
            <a href="/site/terms">Terms of Service</a> |
            <a href="/site/privacy">Privacy Policy</a>
          </div>
        </div>
        <div class="sponsor">
          <div>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
          <a href="http://www.rackspace.com">
            <img alt="Dedicated Server" src="http://assets3.github.com/images/modules/footer/rackspace_logo.png?61b5039b1ce255c2a6acbff52acc1f9b426a05b2" />
          </a>
        </div>
      </div>
    </div>

    <script>window._auth_token = "8729cc1e2d7c810b7d41247c2ddd589e3a7258b1"</script>
    

    <script type="text/javascript">
      _kmq.push(['trackClick', 'entice_banner_link', 'Entice banner clicked']);
      
    </script>
    
  </body>
</html>

