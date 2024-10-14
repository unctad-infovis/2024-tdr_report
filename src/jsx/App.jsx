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
          <p>Bacon ipsum dolor amet lorem dolore magna, drumstick frankfurter tenderloin deserunt buffalo sunt sed. Consequat lorem sirloin sint, mollit short loin commodo prosciutto meatball bresaola aliquip esse boudin. Chuck irure frankfurter, nostrud id shankle bresaola alcatra sausage laborum officia. Laborum proident dolore nisi shankle. Pancetta consectetur meatball kielbasa pork loin. Doner ad sint qui.</p>
          <p>Burgdoggen pork belly culpa, mollit laboris capicola aute. Ullamco sint dolore picanha spare ribs incididunt. Chuck bacon pork belly, et est laborum kielbasa. Pork loin sirloin kielbasa ribeye jowl, meatloaf ball tip flank frankfurter dolore. Consectetur dolore beef buffalo lorem reprehenderit.</p>
          <p>Anim dolore qui jerky, ball tip ut aliquip ullamco. Filet mignon turkey in cupidatat consectetur flank sed. Kevin swine ut, sed filet mignon t-bone exercitation in beef burgdoggen. Adipisicing ullamco beef fugiat lorem incididunt magna qui capicola dolore. Magna hamburger buffalo, pancetta jerky reprehenderit ball tip ut venison commodo. Cupim dolor rump turkey. Ham hock porchetta ea hamburger, excepteur labore elit ut ut pork belly dolore in ut spare ribs.</p>
        </div>
        <div className="media_container">
          <div className="image_container" />
        </div>
        <div className="text_container">
          <p>
            Meatloaf ground round magna, ham corned beef sunt sint ribeye. Picanha cow pork loin bacon in excepteur cillum et culpa. Sausage rump ad porchetta eiusmod excepteur dolore pork chop alcatra corned beef salami. Alcatra duis t-bone quis non bresaola. Chuck pork chop boudin dolor reprehenderit, pancetta culpa brisket pariatur enim dolore in alcatra hamburger. Hamburger cillum cupim short loin, commodo chislic culpa pork loin burgdoggen tenderloin pig turkey.
          </p>
          <p>Voluptate burgdoggen incididunt ullamco, laborum et est fatback short loin turducken kielbasa hamburger bresaola. Occaecat flank strip steak sint shankle ex, corned beef anim lorem meatloaf landjaeger alcatra tongue. Capicola enim eu, bresaola cupidatat short loin brisket sirloin elit reprehenderit esse sed andouille porchetta. Frankfurter bresaola ball tip, et nulla pariatur tempor short loin prosciutto in. In t-bone flank, venison esse chuck shank.</p>
          <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
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
