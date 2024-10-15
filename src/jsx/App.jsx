import React, { useRef } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

import slideToggle from './helpers/slideToggle.js';

function App() {
  const appRef = useRef();

  // const analytics = window.gtag || undefined;
  // if (typeof analytics !== 'undefined') {
  //   analytics('event', 'Scroll', { event_category: '2022-rmt_report', event_label: 'Section 1', transport_type: 'beacon' });
  // }

  const anchorClick = (target, name) => {
    console.log(name);
    // track(name);
    setTimeout(() => {
      scrollIntoView(appRef.current.querySelector(target), {
        align: {
          left: 0,
          leftOffset: 0,
          lockX: false,
          lockY: false,
          top: 0,
          topOffset: 30
        },
        cancellable: false,
        time: 1000
      });
    }, 50);
  };

  return (
    <div className="app" ref={appRef}>
      { /* Header */}
      <div className="header_container">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <div className="between" />
        <div className="content_bottom">
          <h2>Pact for the Future: Redefining trade and development for global progress</h2>
          <div className="download_buttons_container">
            <a href="#download" type="button" className="overview">Overview</a>
            <a href="#download" type="button" className="pdf_download">Full report</a>
          </div>
          <div className="chapters_navigation_container">
            {
              ['The macroeconomics of discontent', 'The Illusion of a Rebound: International Markts in 2024', 'Golbalization at an Inflection Point', 'Rise, Retreat and Repositioning Lessons from the Global South', 'Global South and the International Tax Architecture'].map((chapter_title, i) => (
                <button onClick={() => anchorClick(`.chapter_header_${i + 1}`)} type="button">
                  <div className="chapter_navigation" key={chapter_title}>
                    <div className="chapter_title"><h2>{chapter_title}</h2></div>
                    <div className="chapter_image"><div className={`chapter_image_${i + 1}`} /></div>
                    <div className="chapter_meta">
                      <div className="chapter_number">
                        {i + 1}
                        .
                      </div>
                      <a className="chapter_download_button" href="#download" aria-label="Download" />
                    </div>
                  </div>
                </button>
              ))
            }
          </div>
        </div>
      </div>

      { /* Overview */}
      <div className="content_container">
        <div className="text_container">
          <p>The 2024 Trade and Development Report calls for a fundamental rethink of development strategies amid a global slowdown and rising social discontent.</p>
          <p>It warns that the global economy, strained by crises and climate change, is stuck in slow growth and weak investment, unable to meet development needs.</p>
          <p>Meanwhile, rapid technological changes and rising geopolitical tensions are reshaping trade and production patterns, potentially worsening inequalities between developed and developing countries.</p>
          <p>In a sluggish economy, developing nations face tough policy choices as they contend with rising debt, high energy prices and growing demands for health and social services.</p>
          <p>Despite these challenges, the report identifies opportunities, such as soaring demand for critical minerals for the energy transition and increased South-South trade. However, without strategic policy shifts, the opportunities could be lost.</p>
          <p>The report urges developing countries to prioritize economic resilience and diversification, moving beyond manufacturing-led export models. It calls for stronger multilateral action to improve tax cooperation, ensure an equitable green transition and build a development-focused global financial system.</p>
          <p>It examines five core themes:</p>
          <ul>
            <li>A new, low normal for the global economy</li>
            <li>The changing structure of trade and trade policies</li>
            <li>The dawn of the service economy</li>
            <li>Financialization in a new commodity cycle</li>
            <li>The Global South and its quest for long-term development finance</li>
          </ul>
          <blockquote>
            <div className="quote">We must rethink, reform and revive. Rethink global development strategies, reform the international financial system and revive the commitment to multilateralism.</div>
            <div className="author">
              <span className="name">Rebeca Grynspan</span>
              <span className="title">Secretary-General of UN Trade and Development (UNCTAD)</span>
            </div>
          </blockquote>
        </div>
      </div>

      { /* Chapter 1 */ }
      <div className="chapter_header chapter_header_1">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <div className="content_bottom">
          <h2>
            <span className="chapter">Chapter</span>
            <span className="number">1</span>
            <span className="name">The macroeconomics of discontent: Current trends and challenges in the global economy</span>
            <span className="desc">
              This section examines the impacts of the global economy’s new, “low normal” of 2.7% growth
            </span>
          </h2>
          <div className="download_buttons_container">
            <a href="download" type="button" className="pdf_download">Chapter 1</a>
          </div>
        </div>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => anchorClick('.header_container')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '1', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_1">
          <div className="inner">
            <div className="text_container">
              <p>Global growth is projected to stagnate at 2.7% in 2024 and 2025, down from the 3.0% annual average between 2011 and 2019 and well below the 4.4% average seen before the global financial crisis.</p>
              <p>For developing countries, the slowdown is sharper, with growth falling from 6.6% between 2003 and 2013 to just 4.1% over the past decade. Excluding China, the Global South’s growth averaged only 2.8%.</p>
              <p>This “new normal” of low growth is insufficient to address the economic, social and environmental challenges facing developing countries, especially as their public debt rises.</p>
              <p>In the Global South, public debt levels have jumped 15 percentage points in four years. High interest rates in advanced economies, combined with depreciating currencies in developing nations, have raised the cost of foreign debt, forcing many countries to divert more of their export earnings to debt payments.</p>
              <p>The report warns that prolonged monetary tightening to control post-pandemic inflation has been only partially effective and caused global economic hardship.</p>
              <p>As a result, the post-COVID-19 recovery has been marked by widespread discontent, with higher consumer prices and rising credit costs eroding household disposable income by 8% since 2020.</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '1', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_1">
          <div className="inner">
            <div className="text_container">
              <p>
                Amid the global economic slowdown, rising debt and growing discontent, the report calls for key policy shifts to ensure a sustainable and inclusive recovery and reverse trends of rising income inequality, stagnant real wages and jobless growth in developing economies.
              </p>
              <ol>
                <li>
                  <strong>Adopt a balanced approach to inflation.</strong>
                  <br />
                  The report warns against over-relying on monetary tightening, advocating for a mix of fiscal, monetary and regulatory policies to tackle the forces driving inflationary pressures. This should include concerted efforts to curb anti-competitive practices, address abuses of market dominance and reduce corporate concentration in key sectors.
                </li>
                <li>
                  <strong>Consider the broader impacts of monetary policy.</strong>
                  <br />
                  Monetary authorities should factor in how their decisions affect debt sustainability, financial stability and the financing of investment needs, particularly in developing countries.
                </li>
                <li>
                  <strong>Implement comprehensive debt reforms.</strong>
                  <br />
                  UN Trade and Development proposes a set of reforms across the entire debt cycle to reduce risks and vulnerabilities in developing countries.
                </li>
                <li>
                  <strong>Diversify economies.</strong>
                  <br />
                  Addressing rising income inequality, stagnant wages and jobless growth requires industrial policies that promote economic diversification. These strategies should extend beyond manufacturing and consider the interplay between environmental, financial and technological factors.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 2 */ }
      <div className="chapter_header chapter_header_2">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <div className="content_bottom">
          <h2>
            <span className="chapter">Chapter</span>
            <span className="number">2</span>
            <span className="name">Ground meatloaf round magna, ham corned beef sunt sint ribeye</span>
            <span className="desc">Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami.</span>
          </h2>
          <div className="download_buttons_container">
            <a href="download" type="button" className="pdf_download">Chapter 2</a>
          </div>
        </div>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => anchorClick('.header_container')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '2', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_2">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '2', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_2">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 3 */ }
      <div className="chapter_header chapter_header_3">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <div className="content_bottom">
          <h2>
            <span className="chapter">Chapter</span>
            <span className="number">3</span>
            <span className="name">Ground meatloaf round magna, ham corned beef sunt sint ribeye</span>
            <span className="desc">Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami.</span>
          </h2>
          <div className="download_buttons_container">
            <a href="download" type="button" className="pdf_download">Chapter 3</a>
          </div>
        </div>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => anchorClick('.header_container')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '3', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_3">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '3', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_3">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 4 */ }
      <div className="chapter_header chapter_header_4">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <div className="content_bottom">
          <h2>
            <span className="chapter">Chapter</span>
            <span className="number">4</span>
            <span className="name">Ground meatloaf round magna, ham corned beef sunt sint ribeye</span>
            <span className="desc">Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami.</span>
          </h2>
          <div className="download_buttons_container">
            <a href="download" type="button" className="pdf_download">Chapter 4</a>
          </div>
        </div>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => anchorClick('.header_container')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '4', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_4">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '4', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_4">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 5 */ }
      <div className="chapter_header chapter_header_5">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <div className="content_bottom">
          <h2>
            <span className="chapter">Chapter</span>
            <span className="number">5</span>
            <span className="name">Ground meatloaf round magna, ham corned beef sunt sint ribeye</span>
            <span className="desc">Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami.</span>
          </h2>
          <div className="download_buttons_container">
            <a href="download" type="button" className="pdf_download">Chapter 5</a>
          </div>
        </div>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => anchorClick('.header_container')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '5', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_5">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => slideToggle(appRef, '5', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_5">
          <div className="inner">
            <div className="text_container">
              <p>
                Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
              </p>
              <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
              <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
