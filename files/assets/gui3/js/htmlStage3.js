// Created By Team TERL
// Version: 1.6.6
// Traders Education TERL LTD 2019

(function (window) {

    // var scripts = document.getElementsByTagName('script');
    var scripts = document.querySelector('script[src="https://d2ikij6pcyb4st.cloudfront.net/files/assets/gui3/js/htmlStage3.js"]');
    var urlWidgets = 'https://terl3.com/';

    // for (var i = 0; i < scripts.length; i++) {
        var script = scripts;

	    // if(typeof jQuery == 'undefined') {
	    //     var headTag = document.getElementsByTagName("head")[0];
	    //     var jqTag = document.createElement('script');
	    //     jqTag.type = 'text/javascript';
	    //     jqTag.src = 'https://cdn1.terl3.com/files/assets/gui3/js/jquery-3.1.1.min.js';
	    //     headTag.appendChild(jqTag);
	    // }

        if (script.getAttribute('src') == 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/gui3/js/htmlStage3.js' ||
            script.getAttribute('src') == 'http://d2ikij6pcyb4st.cloudfront.net/files/assets/gui3/js/htmlStage3.js' ||
            script.getAttribute('src') == 'https://traders-center.s3.amazonaws.com/files/assets/gui3/js/htmlStage3.js' ||
            script.getAttribute('src') == 'https://cdn1.terl3.com/files/assets/gui3/js/htmlStage3.js' ||
            script.getAttribute('src') == 'http://cdn1.terl3.com/files/assets/gui3/js/htmlStage3.js') {

            thisScriptElement = script,
            productUid = script.getAttribute('data-product-uid'),
            clientUid = script.getAttribute('data-client-uid'),
            jumpid = script.getAttribute('data-video'),
            jumpWebinar = script.getAttribute('data-webinar'),
            jumpGlossary = script.getAttribute('data-glossary'),
            jumpEbook = script.getAttribute('data-ebook'),
            jumpEbookst3Jump = script.getAttribute('data-ebookst3Jump'),
            jumpSignals = script.getAttribute('data-signals'),
            jumpCalendar = script.getAttribute('data-calendar'),
            jumpNews = script.getAttribute('data-news'),
            jumpTools = script.getAttribute('data-tools'),
            jumpQuiz = script.getAttribute('data-quiz'),
            WebinarUserID = script.getAttribute('data-user-id'),
            ProgUser = script.getAttribute('data-prog'),
            DataHeight = script.getAttribute('data-height'),
            WebinarUserName = script.getAttribute('data-user-name'),
            tools2jump = script.getAttribute('data-tools2jump'),
            lang = script.getAttribute('data-lang'),
            style = script.getAttribute('data-style'),
            incss = script.getAttribute('data-css'),
	        jumps = script.getAttribute('data-jump'),
            parameterPath = script.getAttribute('data-parameters'),
            webianrUrlParameter = script.getAttribute('data-webinar-url'),
            // STYLE CHANGE
            stages = style != null ? style : 'stage1';
            baseID = urlWidgets + stages + '/'+ lang + '/' + clientUid + '/' + productUid;
            jumpStage = jumps != null ? jumps : 'jump4';
            var min = DataHeight != null ? DataHeight : "450";

            // Jump Stage3 URL
            baseJumpVideo = urlWidgets + '/' + jumpStage + '/' + lang + '/' + clientUid + '/' + productUid +'/video';
            baseIDEbook = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/ebook/';
            baseIDEbookst3Jump = urlWidgets + '/jump4e/'+ lang + '/' + clientUid + '/' + productUid + '/ebook/' + jumpEbookst3Jump;
            baseJumpWebinar = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/webinar';
            basejumpGlossary = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/glossary';
            basejumpSignals = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/signals';
            basejumpCalendar = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/calender';
            basejumpNews = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/news';
            basejumpQuiz = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/quiz';
            basejumpTools = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/tools';
            basejumpTools2jump = urlWidgets + '/' + jumpStage + '/'+ lang + '/' + clientUid + '/' + productUid + '/tools/' + tools2jump;

            function onReady(callback) {
                var intervalId = window.setInterval(function() {
                    if (document.getElementById('education') !== undefined) {
                        window.clearInterval(intervalId);
                        callback.call(this);
                    }
                }, 1500);
            }
              
            function setVisible(selector, visible) {
                document.querySelector(selector).style.display = visible ? 'block' : 'none';
            }	

            function appendScript(target, attributes, code, sync, onload) {
              var scriptNode = document.createElement('script');

              for (var i = 0; i < attributes.length; i++) {
                var attr = attributes[i];
                scriptNode.setAttribute(attr[0], attr[1]);
              }

              if (code) {
                scriptNode.innerHTML = code;
              }

              if (sync) {
                scriptNode.async = false;
              } else {
                scriptNode.async = true;
              }

              if (onload) {
                scriptNode.onload = onload;
              }

              target.appendChild(scriptNode);
            }

            function Education(url,link,deposit) {

                var parent = thisScriptElement.parentNode;
				var paramstersP = '';
				if(parameterPath !== null && webianrUrlParameter !== null) {
					paramstersP = parameterPath + '&' + webianrUrlParameter;
				} else if(parameterPath !== null) {
					paramstersP = parameterPath;
				} else if(webianrUrlParameter !== null) {
					paramstersP = webianrUrlParameter;
				}
                var div = document.createElement('div');
                var css = incss != null ? incss : '';
                div.id = 'education';
                div.className = 'eudcation';
                div.style = 'overflow:auto; -webkit-overflow-scrolling:touch;';
				div.innerHTML = '<style>#education {background: transparnt}#education #loader{position:absolute;left:50%;top:50%;z-index:1;width:60px;height:60px;margin:-75px 0 0 -75px;border:10px solid #f3f3f3;border-radius:50%;border-top:10px solid #000000;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style><div id="loader"></div>';
                div.innerHTML += '<iframe style=\"width: 1px;min-width: 100%;*width: 100%;\" src=\"'+ url + paramstersP +'\" frameborder=\"0\" width=\"100%\" scrolling=\"no\" id=\"iframeducation\" allowfullscreen></iframe>';

                appendScript(div, [['type', 'text/javascript'], ['src', 'https://cdn1.terl3.com/files/assets/js/iframe/iframeResizer.min.js']], null, true, function () {
                    iFrameResize({
                        log: false,
                        checkOrigin: false,
                        onResized: () => {
                            onReady(function() {
                                setVisible('#iframeducation', true);
                                setVisible('#loader', false);
                            });
                         },
                        warningTimeout: 30000,
                        sizeHeight:true
                    }, "#iframeducation");
                });

                appendScript(div, [['type', 'text/javascript'], ['data-css', css], ['data-url', document.domain], ['id', 'techeker'], ['data-page', document.location.href], ['data-client', clientUid],['data-pams', parameterPath], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.urlcheker.js?host=' + document.domain]]);

                if(WebinarUserID != null || WebinarUserName != null) {
                    appendScript(div, [['type', 'text/javascript'], ['data-user-id', WebinarUserID], ['id', 'tradelive'], ['data-user-name', WebinarUserName], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/js/jquery.traderlive.js?host=' + document.domain]]);
                }

                if(ProgUser != null) {
                    appendScript(div, [['type', 'text/javascript'], ['data-prog', ProgUser], ['id', 'progress'], ['data-client', clientUid], ['src', 'https://d2ikij6pcyb4st.cloudfront.net/files/assets/gui3/js/jquery.userProgrres.js?8600']]);
                }

                parent.appendChild(div);

                thisScriptElement.parentNode.removeChild(thisScriptElement)
            }


            if(jumpid != null) {

                Education(baseJumpVideo,link='',deposit='',function() {
                    window.teFirstRun = false;
                });

            } else if(jumpEbook != null) {

                Education(baseIDEbook,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            } else if(jumpWebinar != null) {

                Education(baseJumpWebinar,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            } else if(jumpGlossary != null) {

                Education(basejumpGlossary,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            } else if(jumpSignals != null) {

                Education(basejumpSignals,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            } else if(jumpCalendar != null) {

                Education(basejumpCalendar,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            } else if(jumpNews != null) {

                Education(basejumpNews,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            } else if(jumpNews != null) {

                Education(basejumpNews,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            }  else if(jumpQuiz != null) {
                
                Education(basejumpQuiz,link='',deposit='',function() {
                    window.teFirstRun = false;
                });


            }  else if(jumpTools != null) {

                Education(basejumpTools,link='',deposit='',function() {
                    window.teFirstRun = false;
                });

            } else if(tools2jump != null) {

                Education(basejumpTools2jump,link='',deposit='',function() {
                    window.teFirstRun = false;
                });

            } else if(jumpEbookst3Jump != null) {

                Education(baseIDEbookst3Jump,link='',deposit='',function() {
                    window.teFirstRun = false;
                });

            } else {

                Education(baseID,link='',deposit='',function() {
                    window.teFirstRun = false;
                });

            }


        }

    // }

}(window));
