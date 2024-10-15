import React, { useRef } from 'react';
import '../styles/styles.less';

import slideToggle from './helpers/slideToggle.js';

function App() {
  const appRef = useRef();
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
        <div className="content_bottom">
          <h2>Pact for the Future: Redefining trade and development for global progress</h2>
          <div className="download_buttons_container">
            <button type="button" className="overview">Overview</button>
            <button type="button" className="full_report">Full report</button>
          </div>
          <div className="chapters_navigation_container">
            {
              ['The Marcoeconomics of Discontent', 'The Illusion of a Rebound: International Markts in 2024', 'Golbalization at an Inflection Point', 'Rise, Retreat and Repositioning Lessons from the Global South', 'Global South and the International Tax Architecture'].map((chapter_title, i) => (
                <div className="chapter_navigation" key={chapter_title}>
                  <div className="chapter_title"><h2>{chapter_title}</h2></div>
                  <div className="chapter_image"><div className={`chapter_image_${i + 1}`} /></div>
                  <div className="chapter_meta">
                    <div className="chapter_number">
                      {i + 1}
                      .
                    </div>
                    <div className="chapter_download_button" />
                  </div>
                </div>
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
            <div>”We must rethink, reform and revive. Rethink global development strategies, reform the international financial system and revive the commitment to multilateralism.”</div>
            <div>-- Rebeca Grynspan, Secretary-General of UN Trade and Development (UNCTAD)</div>
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
            <span className="name">Ground meatloaf round magna, ham corned beef sunt sint ribeye</span>
            <span className="desc">Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami.</span>
          </h2>
          <div className="download_buttons_container">
            <button type="button" className="full_report">Chapter 1</button>
          </div>
        </div>
        <div className="backtotop" />
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '1', 'content')} className="chapter_menu_button chapter_menu_button_overview">
            <span className="name">Overview</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="content content_1">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '1', 'recommendations')} className="chapter_menu_button chapter_menu_button_recommendations">
            <span className="name">Key recommendations</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="recommendations recommendations_1">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
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
            <button type="button" className="full_report">Chapter 2</button>
          </div>
        </div>
        <div className="backtotop" />
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '2', 'content')} className="chapter_menu_button chapter_menu_button_overview">
            <span className="name">Overview</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="content content_2">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '2', 'recommendations')} className="chapter_menu_button chapter_menu_button_recommendations">
            <span className="name">Key recommendations</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="recommendations recommendations_2">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
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
            <button type="button" className="full_report">Chapter 3</button>
          </div>
        </div>
        <div className="backtotop" />
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '3', 'content')} className="chapter_menu_button chapter_menu_button_overview">
            <span className="name">Overview</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="content content_3">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '3', 'recommendations')} className="chapter_menu_button chapter_menu_button_recommendations">
            <span className="name">Key recommendations</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="recommendations recommendations_3">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
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
            <button type="button" className="full_report">Chapter 4</button>
          </div>
        </div>
        <div className="backtotop" />
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '4', 'content')} className="chapter_menu_button chapter_menu_button_overview">
            <span className="name">Overview</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="content content_4">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '4', 'recommendations')} className="chapter_menu_button chapter_menu_button_recommendations">
            <span className="name">Key recommendations</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="recommendations recommendations_4">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
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
            <button type="button" className="full_report">Chapter 5</button>
          </div>
        </div>
        <div className="backtotop" />
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '5', 'content')} className="chapter_menu_button chapter_menu_button_overview">
            <span className="name">Overview</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="content content_5">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={() => slideToggle(appRef, '5', 'recommendations')} className="chapter_menu_button chapter_menu_button_recommendations">
            <span className="name">Key recommendations</span>
            <span className="expand_label">Expand</span>
          </button>
        </div>
        <div className="recommendations recommendations_5">
          <div className="inner">
            <p>
              Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
            </p>
            <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
            <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
