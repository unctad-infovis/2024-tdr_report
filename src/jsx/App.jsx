import React, { useRef, useEffect, useCallback } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import scrollIntoView from 'scroll-into-view';
import DwChartContainer from './components/DwChartContainer.jsx';
import ShareContainer from './components/ShareContainer.jsx';

// https://www.npmjs.com/package/scroll-into-view
import slideToggle from './helpers/slideToggle.js';

function App() {
  const appRef = useRef();

  const analytics = window.gtag || undefined;

  const track = useCallback((label_event = false, value_event = false) => {
    if (typeof analytics !== 'undefined' && label_event !== false && value_event !== false) {
      analytics('event', 'project_interaction', {
        label: label_event,
        project_name: '2024-tdr_report',
        transport_type: 'beacon',
        value: value_event
      });
    }
  }, [analytics]);

  const seenChapter = (chapter) => {
    track('Scroll', chapter);
  };

  const scrollTo = useCallback((target, name) => {
    track('Button', name);
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
  }, [track]);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      if (hash === '#chapter1' || hash === '#chapter2' || hash === '#chapter3' || hash === '#chapter4' || hash === '#chapter5') {
        const chapter_number = hash.slice(-1);
        scrollTo(`.chapter_header_${chapter_number}`, `Chapter ${chapter_number}`);
      }
    }
  }, [scrollTo]);

  const openContainer = (seq, type, event) => {
    track('Button', `Open container ${seq}`);
    slideToggle(appRef, seq, type, event);
  };

  const downloadDocument = (event) => {
    track('Anchor', `${event.currentTarget.href}`);
    event.stopPropagation();
    return false;
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
          <h2>
            Rethinking development in the age of discontent
            <div className="share_wrapper"><ShareContainer url={window.location.href} /></div>
          </h2>

          <div className="download_buttons_container">
            <a href="https://unctad.org/system/files/official-document/tdr2024overview_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="overview" rel="noreferrer">Overview</a>
            <a href="https://unctad.org/system/files/official-document/tdr2024_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="pdf_download" rel="noreferrer">Full report</a>
          </div>
          <div className="chapters_navigation_container">
            {
              ['The macro-economics of discontent', 'The illusion of a rebound', 'Globalization at an inflection point', 'Rise, retreat and repositioning: Lessons from the Global South', 'The Global South and new international tax architecture'].map((chapter_title, i) => (
                <button onClick={() => scrollTo(`.chapter_header_${i + 1}`, `Chapter ${i + 1}`)} type="button" key={chapter_title}>
                  <div className="chapter_navigation">
                    <div className="chapter_title"><h2>{chapter_title}</h2></div>
                    <div className="chapter_image"><div className={`chapter_image_${i + 1}`} /></div>
                    <div className="chapter_meta">
                      <div className="chapter_number">
                        {i + 1}
                        .
                      </div>
                      <a href={`https://unctad.org/system/files/official-document/tdr2024ch${i + 1}_en.pdf`} target="_blank" onClick={(event) => downloadDocument(event)} className="chapter_download_button" aria-label="Download" rel="noreferrer" />
                    </div>
                  </div>
                </button>
              ))
            }
          </div>
        </div>
      </div>
      <div style={{ margin: '40px auto', textAlign: 'center' }}>
        <a
          style={{
            backgroundColor: '#009edb', color: '#fff', fontSize: '26px', padding: '15px 20px', borderRadius: '20px', textDecoration: 'none'
          }}
          href="https://unctad.org/publication/trade-and-development-report-2025"
        >
          See the Trade and Development Report 2025
        </a>
      </div>
      { /* Overview */}
      <div className="content_container">
        <div className="text_container">
          <p>The 2024 Trade and Development Report calls for a fundamental rethink of development strategies amid a global slowdown and rising social discontent.</p>
          <p>It warns that the global economy, strained by crises and climate change, is stuck in low growth and weak investment, unable to meet development needs.</p>
          <p>Meanwhile, rapid technological changes and rising geopolitical tensions are reshaping trade and production patterns, potentially worsening inequalities between developed and developing countries.</p>
          <p>In a sluggish economy, developing nations face tough policy choices as they contend with rising debt, high energy prices and growing demands for health and social services.</p>
          <p>Despite these challenges, the report identifies opportunities, such as soaring demand for critical minerals for the energy transition and increased South-South trade. However, without strategic policy shifts, the opportunities could be lost.</p>
          <p>The report urges developing countries to prioritize economic resilience and diversification, moving beyond manufacturing-led export models. It calls for stronger multilateral action to improve tax cooperation, ensure an equitable energy transition and build a development-focused global financial system.</p>
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
      <div className="chapter_header chapter_header_1" id="chapter1">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <IsVisible once>
          {(isVisible) => {
            if (isVisible) {
              seenChapter('Chapter 1');
            }
            return (
              <div className="content_bottom">
                <h2>
                  <span className="chapter">Chapter</span>
                  <span className="number">1</span>
                  <span className="name">The macroeconomics of discontent: Current trends and challenges in the global economy</span>
                  <span className="desc">
                    This section examines the impacts of the global economy’s new, “low normal” of 2.7% growth – a rate far below what’s needed to meet development goals
                  </span>
                </h2>
                <div className="download_buttons_container">
                  <a href="https://unctad.org/system/files/official-document/tdr2024ch1_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="pdf_download" rel="noreferrer">Chapter 1</a>
                </div>
              </div>
            );
          }}
        </IsVisible>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => scrollTo('.header_container', 'Top 1')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('1', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
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
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="Ggqdq" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>For developing countries, the slowdown is sharper, with growth falling from 6.6% between 2003 and 2013 to just 4.1% over the past decade. Excluding China, the Global South’s growth averaged only 2.8%.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="5xtKn" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>This “new normal” of low growth is insufficient to address the economic, social and environmental challenges facing developing countries, especially as their public debt rises.</p>
              <p>In the Global South, public debt levels have jumped 15 percentage points in four years. High interest rates in advanced economies, combined with depreciating currencies in developing nations, have raised the cost of foreign debt, forcing many countries to divert more of their export earnings to debt payments.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="19WNi" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>The report warns that prolonged monetary tightening to control post-pandemic inflation has been only partially effective and caused global economic hardship.</p>
              <p>As a result, the post-COVID-19 recovery has been marked by widespread discontent, with higher consumer prices and rising credit costs eroding household disposable income by 8% since 2020.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="3zFHf" parent_class="content_1" />
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('1', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
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
      <div className="chapter_header chapter_header_2" id="chapter2">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <IsVisible once>
          {(isVisible) => {
            if (isVisible) {
              seenChapter('Chapter 2');
            }
            return (
              <div className="content_bottom">
                <h2>
                  <span className="chapter">Chapter</span>
                  <span className="number">2</span>
                  <span className="name">The illusion of a rebound: International markets in 2024</span>
                  <span className="desc">This section examines trade’s changing structure, including the waning role of merchandise exports and the rising influence of new technologies and geopolitics.</span>
                </h2>
                <div className="download_buttons_container">
                  <a href="https://unctad.org/system/files/official-document/tdr2024ch2_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="pdf_download" rel="noreferrer">Chapter 2</a>
                </div>
              </div>
            );
          }}
        </IsVisible>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => scrollTo('.header_container', 'Top 2')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('2', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_2">
          <div className="inner">
            <div className="text_container">
              <p>Between 1995 and 2007, trade grew at twice the rate of global GDP. But since the 2008–2009 financial crisis, trade growth relative to GDP has stalled.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="PkjTv" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>Another key shift is the waning role of merchandise trade, which declined by 1.2% in 2023. This was the first time it contracted while the global economy grew.</p>
              <p>In 2024, merchandise trade is expected to rebound by 2% in real terms (after adjusting for inflation), but trade in services is set to continue growing by 5%, increasing its share of the global total to nearly 25% – a share that is expected to keep rising.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="DiJZv" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>For low- and middle-income countries, which rely heavily on trade, these shifts compound development challenges.</p>
              <p>However, trade between developing countries (South-South trade) more than doubled to $5.6 trillion between 2007 and 2023, offering growth and regional integration opportunities. The energy transition also holds promise, with demand soaring for minerals from developing countries that are critical for electric vehicles and renewable energy.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="ushCi" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>Yet new technologies are concentrated in the hands of companies in advanced economies, and geopolitical tensions could accelerate home-shoring, which could limit opportunities for developing countries.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="g0RBQ" parent_class="content_1" />
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('2', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_2">
          <div className="inner">
            <div className="text_container">
              <p>The slowdown in merchandise trade and rapid digitalization call for a rethink of development strategies, as the traditional model of manufacturing-led export growth becomes less effective and low-cost labour loses its importance in attracting foreign investment.</p>
              <ol>
                <li>
                  <strong>Strengthen domestic industries.</strong>
                  <br />
                  Developing countries should invest in renewable energy and implement strategic industrial policies to promote local production, reducing reliance on imported fossil fuels and vulnerabilities to global shocks.
                </li>
                <li>
                  <strong>Foster regional trade and integration.</strong>
                  <br />
                  Leveraging agreements like the African Continental Free Trade Agreement (AfCFTA) and ASEAN Economic Community can help developing countries navigate the risks of fragmented trade and build more diverse and resilient economies.
                </li>
                <li>
                  <strong>Enhance multilateral cooperation.</strong>
                  <br />
                  Institutions such as the World Trade Organization (WTO) should help manage trade fragmentation risks and ensure developing countries have a voice in shaping global trade rules.
                </li>
                <li>
                  <strong>Govern new technologies.</strong>
                  <br />
                  Urgent political action is needed to regulate emerging technologies, especially artificial intelligence. Without global governance and agreed standards, the control of this key element of the world economy would be left in the hands of large corporations and private regulatory bodies, deepening inequalities and risks.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 3 */ }
      <div className="chapter_header chapter_header_3" id="chapter3">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <IsVisible once>
          {(isVisible) => {
            if (isVisible) {
              seenChapter('Chapter 3');
            }
            return (
              <div className="content_bottom">
                <h2>
                  <span className="chapter">Chapter</span>
                  <span className="number">3</span>
                  <span className="name">Globalization at an inflection point</span>
                  <span className="desc">This section focuses on the dawn of the service economy and the growing role of intangibles in trade, highlighting the risks and opportunities for developing countries.</span>
                </h2>
                <div className="download_buttons_container">
                  <a href="https://unctad.org/system/files/official-document/tdr2024ch3_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="pdf_download" rel="noreferrer">Chapter 3</a>
                </div>
              </div>
            );
          }}
        </IsVisible>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => scrollTo('.header_container', 'Top 3')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('3', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_3">
          <div className="inner">
            <div className="text_container">
              <p>Manufacturing is becoming less effective as a growth strategy for developing countries. The competitive advantage of cheap labour no longer aligns with modern manufacturing’s focus on skill and capital-intensive production.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="AskMw" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>In 2023, global merchandise trade slowed by 1.2%, while trade in services grew by 5% in real terms (after adjusting for inflation). Services now make up nearly 25% of global trade, and this share is expected to grow further, raising hopes that services could become a new growth engine.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="yze6W" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>However, relying on trade in services as the main driver for development carries risks, especially for developing countries, which account for less than 30% of global services export revenues.</p>
              <p>The unlevel playing field is evident in the fast-growing creative services sector, valued at $1.4 trillion in 2022, where developed countries account for 80% of exports. Also, 70% of multinational enterprises providing international services are headquartered in advanced economies.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="CvAkx" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>The growing importance of intangible assets like brands, software, data and patented technologies in global supply chains could further widen the gap between developed and developing countries. In 2023, investment in intangible assets grew three times faster than physical assets, reaching $6.9 trillion.</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('3', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_3">
          <div className="inner">
            <div className="text_container">
              <p>While global trade in services is growing, it’s not creating enough quality jobs in developing countries. Policymakers should focus on labour-absorbing sectors and promote technologies that boost productivity without displacing workers.</p>
              <ol>
                <li>
                  <strong>Prioritize labour-complementing technologies.</strong>
                  <br />
                  Encourage companies to invest in technologies that enhance the productivity of low-skilled workers rather than replacing them.
                </li>
                <li>
                  <strong>Support small businesses.</strong>
                  <br />
                  Provide public support and access to productivity-enhancing investments to help smaller enterprises grow, especially in services.
                </li>
                <li>
                  <strong>Safeguard access to markets and technologies.</strong>
                  <br />
                  Ensure that new policy barriers don’t hamper the potential of services exports. Reforming WTO rules on trade barriers could improve developing country access to global markets and critical technologies.
                </li>
                <li>
                  <strong>Make markets fairer.</strong>
                  <br />
                  Strengthen efforts to reduce the concentration of corporate power, improve transparency and promote competition, particularly in fast-growing services markets.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 4 */ }
      <div className="chapter_header chapter_header_4" id="chapter4">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <IsVisible once>
          {(isVisible) => {
            if (isVisible) {
              seenChapter('Chapter 4');
            }
            return (
              <div className="content_bottom">
                <h2>
                  <span className="chapter">Chapter</span>
                  <span className="number">4</span>
                  <span className="name">Rise, retreat and repositioning: Lessons from the Global South</span>
                  <span className="desc">This section dissects financialization in a new commodity cycle, highlighting the increased volatility and risks for export-dependent developing countries in the energy transition.</span>
                </h2>
                <div className="download_buttons_container">
                  <a href="https://unctad.org/system/files/official-document/tdr2024ch4_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="pdf_download" rel="noreferrer">Chapter 4</a>
                </div>
              </div>
            );
          }}
        </IsVisible>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => scrollTo('.header_container', 'Top 4')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('4', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_4">
          <div className="inner">
            <div className="text_container">
              <p>Global commodity prices have dropped from their 2022 peaks but remain 20% above 2019 levels. In 2023, prices for critical energy transition minerals like lithium, cobalt and nickel fell sharply – 78%, 34% and 42%, respectively.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="5CpF6" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>Financialization is increasingly shaping commodity prices, amplifying volatility and heightening risks in the energy transition, especially for export-dependent developing countries.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="9Da8F" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>In response to market volatility, countries signed 22 trade agreements in 2023 to secure supplies to critical minerals. Some importers are also using industrial policies to boost local production.</p>
              <p>Mineral exploration budgets rose by 34% and 16% in 2021 and 2022, while investment in critical minerals surged 20% and 30% during the same period. However, the main benefits will likely be limited to countries with large deposits, as some minerals, like cobalt, are concentrated in specific regions.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="UKeAB" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>Meanwhile, growth in oil and gas investment is projected to slow after 2024, even as subsidies for solar and wind energy make these alternatives competitive with fossil fuels.</p>
              <p>These shifts compound challenges for fossil fuel-exporting developing countries, many of which rely on energy exports for a third of their total exports, with 26 depending on them for more than half their export earnings.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="TrS95" parent_class="content_1" />
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('4', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_4">
          <div className="inner">
            <div className="text_container">
              <p>Managing the growing influence of financialization in commodity markets is a key challenge for developing countries during the energy transition. New strategies and stronger regulations are needed.</p>
              <ol>
                <li>
                  <strong>Balance benefits and risks.</strong>
                  <br />
                  Policymakers should weigh the short-term gains of expanding extractive industries against the growing risks of financialization in commodity markets.
                </li>
                <li>
                  <strong>Improve oversight of multinationals.</strong>
                  <br />
                  Implement stricter measures to ensure that multinationals contribute fairly, boosting domestic revenue for sustainable development.
                </li>
                <li>
                  <strong>Promote diversification.</strong>
                  <br />
                  Prioritize policies for economic diversification, redistribution and financial regulation to create jobs and enhance economic resilience in commodity-exporting countries.
                </li>
                <li>
                  <strong>Fulfil climate commitments.</strong>
                  <br />
                  Global cooperation is crucial for managing the energy transition. Developed countries need to uphold their climate commitments, including funding the energy transition in developing economies.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      { /* Chapter 5 */ }
      <div className="chapter_header chapter_header_5" id="chapter5">
        <div className="content_top">
          <h2>
            <div className="year">
              20
              <span>24</span>
            </div>
            <div className="name">Trade and Development Report</div>
          </h2>
        </div>
        <IsVisible once>
          {(isVisible) => {
            if (isVisible) {
              seenChapter('Chapter 5');
            }
            return (
              <div className="content_bottom">
                <h2>
                  <span className="chapter">Chapter</span>
                  <span className="number">5</span>
                  <span className="name">The Global South and new international tax architecture: The quest for development finance</span>
                  <span className="desc">This section examines the Global South’s search for long-term development finance as they grapple with overlapping crises, limited access to capital and lost revenue.</span>
                </h2>
                <div className="download_buttons_container">
                  <a href="https://unctad.org/system/files/official-document/tdr2024ch5_en.pdf" target="_blank" onClick={(event) => downloadDocument(event)} type="button" className="pdf_download" rel="noreferrer">Chapter 5</a>
                </div>
              </div>
            );
          }}
        </IsVisible>
        <div className="backtoptop_container">
          <button className="backtotop" type="button" aria-label="Back to top" onClick={() => scrollTo('.header_container', 'Top 5')} />
        </div>
      </div>
      <div className="content_container">
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('5', 'content', event)} className="chapter_menu_button chapter_menu_button_overview">
            <div>
              <span className="name">Explore the key analysis and graphs</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="content content_5">
          <div className="inner">
            <div className="text_container">
              <p>Developing countries face tough policy choices amid overlapping crises, mounting public debt levels, high energy costs, rising demands for health and social services, and challenges from protectionism and shifting global trade patterns.</p>
            </div>
            <div className="chart_container">
              <DwChartContainer chart_id="Le2Kk" parent_class="content_1" />
            </div>
            <div className="text_container">
              <p>Raising capital is a major challenge, with only 22 developing countries holding investment-grade ratings. High borrowing costs, volatile external private financing and limited access to affordable public financing widens the gaps in development finance.</p>
              <p>The global financial system, unchanged for 80 years, continues to prioritize private sector profits over the financial needs of developing countries.</p>
              <p>Long-term solutions require better domestic revenue collection. But between 2015 and 2019, about 40% of multinational profits were shifted to tax havens, cutting global corporate tax revenues by 10%. Illicit financial flows, accounting for up to half of recorded trade in some cases, further drain revenue. </p>
              <p>The proposed United Nations Framework Convention on International Tax Cooperation would help developing countries address these issues and close gaps in the global financial system. </p>
              <p>Unlike other proposals, it would bring international taxation under a comprehensive, multilateral system. And the approach would be more inclusive, transparent and focused on the Global South’s needs.</p>
            </div>
          </div>
        </div>
        <div className="chapter_menu_container">
          <button type="button" onClick={(event) => openContainer('5', 'recommendations', event)} className="chapter_menu_button chapter_menu_button_recommendations">
            <div>
              <span className="name">See the main recommendations</span>
              <span className="expand_label">Expand</span>
            </div>
          </button>
        </div>
        <div className="recommendations recommendations_5">
          <div className="inner">
            <div className="text_container">
              <p>Supporting the Global South’s long-term financial stability requires concerted efforts to address rising debt, bolster national budgets, enhance tax cooperation and expand timely and flexible development finance.</p>
              <ol>
                <li>
                  <strong>Implement a global tax convention.</strong>
                  <br />
                  The United Nations Framework Convention on International Tax Cooperation offers an inclusive and transparent approach. But its success hinges on active commitment by UN Member States, effective policy cooperation among developing countries and strong North-South dialogue.
                </li>
                <li>
                  <strong>Reduce domestic revenue drain.</strong>
                  <br />
                  Strengthen national budgets in developing countries by tackling corporate arbitrage, tax avoidance and illicit financial flows, which drain significant resources.
                </li>
                <li>
                  <strong>Improve access to affordable, long-term finance.</strong>
                  <br />
                  Boost concessional financing through multilateral and regional banks, reallocate special drawing rights (SDRs) and leverage innovative financial tools to ensure reliable, long-term funding.
                </li>
                <li>
                  <strong>Prioritize debt relief and restructuring.</strong>
                  <br />
                  Multilateral efforts must continue to focus on flexible liquidity and debt relief and restructuring for nations in or near debt distress.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
