const list = document.querySelectorAll('.list');

function Current()
{
    list.forEach((node) =>
    node.classList.remove('current'));
    this.classList.add('current')

}

list.forEach((node) =>
node.addEventListener('click', Current));