var c=[
    'rgb(57, 60, 11)', 'rgb(168, 193, 183)', 'rgb(168, 77, 183)', 'rgb(168, 77, 76)', 'rgb(226, 77, 76)', 'rgb(226, 77, 157)', 
    'rgb(226, 136, 43)', 'rgb(27, 68, 158)', 'rgb(177, 18, 154)', 'rgb(132, 61, 0)', 'rgb(132, 61, 255)', 'rgb(0, 255, 255)',
    'rgb(0, 108, 194)', 'rgb(211, 212, 211)', 'rgb(52, 53, 133)', 'rgb(52, 164, 133)', 'rgb(95, 164, 133)', 'rgb(95, 164, 29)',
    'rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 255, 0)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 255, 153)',
    'rgb(128, 128, 0)', 'rgb(128, 0, 128)', 'rgb(0, 128, 128)', 'rgb(192, 192, 192)', 'rgb(255, 255, 204)', 'rgb(102, 0, 102)',
    'rgb(204, 204, 255)', 'rgb(51, 51, 0)', 'rgb(0, 51, 0)', 'rgb(51, 51, 153)', 'rgb(204, 153, 255)', 'rgb(255, 204, 153)',
    'rgb(150, 150, 150)', 'rgb(255, 128, 255)', 'rgb(204, 255, 255)', 'rgb(51, 51, 51)', 'rgb(153, 204, 0)', 'rgb(51, 102, 255)' 
];

var pair=[
    '1st', '2nd', '3rd', '4th', '5th'
];

var que= document.getElementById('color');
var ans= document.getElementById('ans');

ans.className= 'hide';

var q= parseInt(Math.random() * c.length);
que.innerHTML= c[q];

var n= parseInt(Math.random() * 5);
document.getElementById(pair[n]).style.background= c[q];

for(var i=0; i<5; i++)
{
    if(i !== n)
        document.getElementById(pair[i]).style.background= c[parseInt(Math.random() * c.length)];
    
        addEvent(document.getElementById(pair[i]), 'click', function(e)
        {
            check(e.target);
        });
}

function check(t)
{
    ans.classList.remove('hide');
    ans.classList.add('show');
    
    if(que.innerHTML == t.style.background)
    {
        ans.innerHTML= '<i class="fa fa-check"></i>Right answer';
        ans.classList.add('right');
        ans.classList.remove('wrong');
        /*alert("You won");*/
    }
    else
    {
        ans.innerHTML= '<i class="fa fa-close"></i>Wrong answer';
        ans.classList.remove('right');
        ans.classList.add('wrong');
    }
}

addEvent(document.getElementById('reset'), 'click', function(){
    location.reload();//it will reload page
});