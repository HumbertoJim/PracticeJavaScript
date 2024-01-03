function test_1()
{
    alert('This is a test');
    let flag = confirm('Are you sure you want to continue?');
    if(flag)
    {
        let name = prompt('Insert your name');
        alert('Hi, '+name);
    }
    else
    {
        alert('Good bye');
    }
}

btn = document.getElementById('test_1');
btn.onclick = test_1;