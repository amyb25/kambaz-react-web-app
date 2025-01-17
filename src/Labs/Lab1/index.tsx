export default function Lab1() {
    return (
        <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections. 
        Each section is usually prefaced with a short title or heading that 
        attempts to summarize the topic of the section it precedes. 
        For instance this paragraph is preceded by the heading Heading Tags. 
        The font of the section headings are usually larger and bolder than their subsection headings. 
        This document uses headings to introduce topics such as 
        HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format 
        plain text so that it renders in a browser as large headings. There are 6 heading tags 
        for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 
        is the smallest heading.
        </div>
        <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> This is the first paragraph. 
        The paragraph tag is used to format vertical gaps between long 
        pieces of text like this one.
        </p>
        <p id="wd-p-2">
        This is the second paragraph. 
        Even though there is a deliberate white gap between the paragraph 
        above and this paragraph, by default browsers render them as one 
        contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-3">
        This is the third paragraph. 
        Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
      </div>
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe:
        <p>Amy's Famous Cookies!!</p>
        <ol id="wd-your-favorite-recipe">
        <li>Mix dry ingredients.</li>
            <li>Start by melting the butter.</li>
            <li>Whisk butter and sugar together.</li>
            <li>Mix in the vanilla extract and a fresh egg.</li>
            <li>Add flour, baking soda, and salt, and stir together.</li>
            <li>Sprinkle in a concerning amount of chocolate chips into the cookie dough.</li>
            <li>Scoop balls of cookie dough onto a baking sheet.</li>
            <li>Bake in a functioning oven for about 7-10 minutes.</li>
            <li>Once done baking, don't even bother to let it cool. Dig in!</li>
        </ol>
        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Game</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>
        Amy's favorite books (in no particular order)
            <ul id="wd-your-books">
                <li>Percy Jackson and the Sea of Monsters</li>
                <li>The Giver</li>
                <li>The Anthropocene Reviewed</li>
            </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center">Q1</td>
              <td align="center">HTML</td>
              <td align="center">2/3/21</td>
              <td align="center">85</td>
            </tr>
            <tr>
              <td align="center">Q2</td>
              <td align="center">CSS</td>
              <td align="center">2/10/21</td>
              <td align="center">90</td>
            </tr>
            <tr>
                <td align="center">Q3</td>
                <td align="center">JavaScript</td>
                <td align="center">2/17/21</td>
                <td align="center">95</td>
            </tr>
            <tr>
              <td align="center">Q4</td>
              <td align="center">English</td>
              <td align="center">5/10/21</td>
              <td align="center">69</td>
            </tr>
            <tr>
              <td align="center">Q5</td>
              <td align="center">Linear Algebra</td>
              <td align="center">2/14/21</td>
              <td align="center">100</td>
            </tr>
            <tr>
                <td align="center">Q6</td>
                <td align="center">Concert Choir</td>
                <td align="center">3/21/21</td>
                <td align="center">83</td>
            </tr>
            <tr>
              <td align="center">Q7</td>
              <td align="center">Spanish</td>
              <td align="center">5/23/21</td>
              <td align="center">36</td>
            </tr>
            <tr>
              <td align="center">Q8</td>
              <td align="center">French</td>
              <td align="center">2/17/21</td>
              <td align="center">90</td>
            </tr>
            <tr>
                <td align="center">Q9</td>
                <td align="center">Biology</td>
                <td align="center">1/29/21</td>
                <td align="center">98</td>
            </tr>
            <tr>
                <td align="center">Q10</td>
                <td align="center">Chemistry</td>
                <td align="center">2/15/21</td>
                <td align="center">79</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} align="center">Average</td>
              <td align="center">83</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
            Loading an image from the internet: <br />
            <img id="wd-starship" width="400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
    </div>
    <div id="wd-forms">
    <h4>Form Elements</h4>
    <form id="wd-text-fields">
        <h5>Text Fields</h5>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input type="password" value="123@#$asd" id="wd-text-fields-password" />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input type="text" placeholder="Doe"
            value="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name" />
            <h5>Text boxes</h5>
            <label>Biography:</label><br/>
            <textarea id="wd-textarea" cols={30} rows={10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
    </form>
    <h5 id="wd-buttons">Buttons</h5>
    <button type="button"
        onClick={() => alert("Life is Good!")}
        id="wd-all-good">
    Hello World!
    </button>
    <h5 id="wd-radio-buttons">Radio buttons</h5>
    <label>Favorite movie genre:</label><br />

    <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
    <label htmlFor="wd-radio-comedy">Comedy</label><br />

    <input type="radio" name="radio-genre" id="wd-radio-drama"/>
    <label htmlFor="wd-radio-drama">Drama</label><br />

    <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
    <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

    <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
    <label htmlFor="wd-radio-fantasy">Fantasy</label>

    <h5 id="wd-checkboxes">Checkboxes</h5>
    <label>Favorite movie genre:</label><br/>

    <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
    <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

    <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
    <label htmlFor="wd-chkbox-drama">Drama</label><br/>

    <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
    <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

    <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
    <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
    </div>
    <div>
    <h4 id="wd-dropdowns">Dropdowns</h4>

    <h5>Select one</h5>
    <label  htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
    <select id="wd-select-one-genre">
    <option value="COMEDY">Comedy</option>
    <option value="DRAMA">Drama</option>
    <option selected value="SCIFI">
        Science Fiction</option>
    <option value="FANTASY">Fantasy</option>
    </select>

    <h5>Select many</h5>
    <label  htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
    <select multiple id="wd-select-many-genre">
    <option value="COMEDY" selected> Comedy          </option>
    <option value="DRAMA">           Drama           </option>
    <option value="SCIFI"  selected> Science Fiction </option>
    <option value="FANTASY">         Fantasy         </option>
    </select>

    <h4>Other HTML field types</h4>

    <label htmlFor="wd-text-fields-email"> Email: </label>
    <input type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"/><br/>

    <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
    <input type="number"
        value="100000"
        placeholder="1000"
        id="wd-text-fields-salary-start"/><br/>

    <label htmlFor="wd-text-fields-rating"> Rating: </label>
    <input type="range"
        value="4"
        max="5"
        placeholder="Doe"
        id="wd-text-fields-rating"/><br/>

    <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
    <input type="date"
        value="2000-01-21"
        id="wd-text-fields-dob"/><br/>
    </div>
    <div>
    <h4>Anchor tag</h4>
    Please
    <a href="https://www.lipsum.com" id="wd-lipsum">click here</a>
    to get dummy text<br/>
    </div>
    
      </div>
    );
}