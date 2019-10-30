/* Console message
 *
 * A message in the console
 * 
 */

const title =
`


.seastorm



`;

const description =
`

A system of autonomous agents, following an unknown path, changeable and elusive, dominated by the entropy of noise and chaos.
The result is a work inspired by the sea during a storm, which knows the Chaos as its only God!

`;

const message = 
`

A WebGL artwork by Giovanni Muzio - Kesson | https://kesson.io 
For more information, check https://kesson.io/portfolio/work/seastorm.html 
Oh and by the way, there is no need to check the console for the source code, you can have a look at the code on my Github 
https://github.com/KessonDalef/seastorm_webgl 


`;

const Welcome = function() {
    if ((window.chrome || window.safari)) {
        let l = 'font-family:Open Sans; font-size:1em; line-height:2em;';
        [
            [title, l + 'font-size:2em; font-weight:bold;'],
            [description, l + 'font-size:1.2em; font-weight:light;'],
            [message, l],
        ].map(function (r) {
            setTimeout(console.log.bind(console, '\n%c' + r[0], r[1]));
        });
    }
}

export { Welcome };