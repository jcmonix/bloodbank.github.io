const btnList = document.querySelectorAll('btn');
function showContent(eventType, button) {
    const content = {
        uevents: `
            <h1>Upcoming Events</h1>
            <hr>
            <h2>Blood Donation Drive</h2>
            <p><strong>Date:</strong> August 15, 2024</p>
            <p><strong>Location:</strong> Melvin Jones, Burnham Park</p>
            <p>Join us for our annual blood donation drive. Help save lives by donating blood and encouraging others to do the same.</p>   
            <h2>Blood Donation Awareness Seminar</h2>
            <p><strong>Date:</strong> September 10, 2024</p>
            <p><strong>Location:</strong>Baguio General Hospital</p>
            <p>Attend our seminar to learn about the importance of blood donation and how you can make a difference in your community.</p>      
            `,
        pevents: `
            <h1>Past Events</h1>
            <hr>
            <h2>World Blood Donor Day Celebration</h2>
            <p><strong>Date:</strong> June 14, 2024</p>
            <p><strong>Location:</strong>Red Cross Philippines Baguio City Chapter</p>
            <p>We celebrated World Blood Donor Day with a series of activities, including a blood donation camp, awareness sessions, and fun games for kids.</p>
            <h2>Health and Wellness Fair</h2>
            <p><strong>Date:</strong> May 5, 2024</p>
            <p><strong>Location:</strong>Baguio City Hall</p>
            <p>Our participation in the Health and Wellness Fair helped spread awareness about the importance of regular blood donations and healthy living.</p>
        `,
        mission: `
            <h1>Our Mission</h1>
            <hr>
            <p>Our mission is to save lives by ensuring a safe and sufficient blood supply through volunteer donations and efficient management.</p>
        `,
        vision: `
            <h1>Our Vision</h1>
            <hr>
            <p>We envision a world where everyone has access to safe blood when needed, and where the act of donating blood is recognized as a vital and selfless contribution to society.</p>
        `,
        values: `
            <h1>Our Values</h1>
            <hr>
            <ul>
                <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.</li>
                <li><strong>Compassion:</strong> We provide compassionate care to those we serve.</li>
                <li><strong>Excellence:</strong> We strive for excellence in everything we do.</li>
                <li><strong>Collaboration:</strong> We work together with our community and partners to achieve our goals.</li>
            </ul>
        `,
        team: `
            <h1>Our Team</h1>
            <hr>
            <p>Our dedicated team of professionals and volunteers work tirelessly to ensure that blood is available when and where it is needed. Our team includes:</p>
            <ul>
                <li>Medical professionals</li>
                <li>Phlebotomists</li>
                <li>Laboratory technicians</li>
                <li>Support staff</li>
                <li>Volunteers</li>
            </ul>
        `,
        impact: `
            <h1>Our Impact</h1>
            <hr>
            <p>Since our founding, we have collected thousands of units of blood and saved countless lives. We are committed to continuing this critical work and expanding our reach to serve even more people in need.</p>
        `,
        SLU:`
            <h1>Saint Louis University Hospital of the Sacred Heart</h1>
            <hr>
            <h2>Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>50 units</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>30 units</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>45 units</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>20 units</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>25 units</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>10 units</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>60 units</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>15 units</td>
                    </tr>
                </tbody>
            </table>
        `,
        PCDH:`
            <h1>Pines City Doctors’ Hospital</h1>
            <hr>
            <h2>Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>43 units</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>27 units</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>54 units</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>33 units</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>27 units</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>17 units</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>42 units</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>29 units</td>
                    </tr>
                </tbody>
            </table>
        `,
        BGHMC:`
            <h1>Baguio General Hospital Medical Center</h1>
            <hr>
            <h2>Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>56 units</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>46 units</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>24 units</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>33 units</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>27 units</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>29 units</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>69 units</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>23 units</td>
                    </tr>
                </tbody>
            </table>
        `,
        RC:`
            <h1>Philippine Red Cross Baguio City Chapter</h1>
            <hr>
            <h2>Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>62 units</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>55 units</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>43 units</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>41 units</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>26 units</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>33 units</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>22 units</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>22 units</td>
                    </tr>
                </tbody>
            </table>
        `,
        BeGH:`
            <h1>Benguet General Hospital</h1>
            <hr>
            <h2>Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>43 units</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>47 units</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>51 units</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>37 units</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>17 units</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>18 units</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>12 units</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>8 units</td>
                    </tr>
                </tbody>
            </table>
        `,
        NDDCH:`
            <h1>Notre Dame de Chartres Hospital</h1>
            <hr>
            <h2>Blood Inventory</h2>
            <table>
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Supply</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A+</td>
                        <td>66 units</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>50 units</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>43 units</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>29 units</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>15 units</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>33 units</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>31 units</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>25 units</td>
                    </tr>
                </tbody>
            </table>
        `,
        data:`
            <h1>Blood Inventory Data Analysis</h1>
            <hr>
            <canvas id="bloodSupplyChart" width="400" height="200" style="display: none;"></canvas>
        `,
    };

    document.getElementById('info-content').innerHTML = content[eventType];

    // Remove the active class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add the active class to the clicked button
     button.classList.add('active');

    
}
