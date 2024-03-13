const backdrop=document.querySelector('.backdrop')
const breadCrumbButton=document.querySelector('.breadCrumb');
breadCrumbButton.addEventListener('click',fun);
function fun()
{
    console.dir(backdrop);
    backdrop.style.display='flex'
}

const backdropClose=document.querySelector('.close');
backdropClose.addEventListener('click',closeBackdrop);
function closeBackdrop()
{
    backdrop.style.display='none'
}
