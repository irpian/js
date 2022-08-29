
var random_images = [
    'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/12/17/11/roe-deer-2634729_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/10/25/23/52/wolf-62898_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/11/29/13/08/kingfisher-1068684_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/20/11/49/fox-1842565_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/02/07/11/45/eagle-2045655_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/12/30/12/16/cat-1940487_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/02/04/20/48/owl-77894_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/03/04/00/17/lion-21853_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/09/16/22/42/cheetah-448901_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/10/12/17/12/cat-61079_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/23/14/terrier-1851108_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/20/11/09/winter-1842508_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/04/20/23/47/tiger-1342385_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/07/01/15/51/bald-eagle-142685_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/10/27/21/51/tiger-2895617_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/01/15/tiger-1851653_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/13/32/red-panda-1852861_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/14/09/hawk-1853120_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/10/27/20/25/leopard-2895448_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/04/18/10/17/wolf-1336229_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/06/19/23/highland-cow-1575003_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/05/04/16/50/cat-3374422_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/12/13/18/50/frog-69813_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/10/07/tiger-1868911_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/06/21/13/37/lizard-2427248_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/06/09/21/09/lizard-804114_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/03/28/fox-1867062_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/06/22/58/horse-1804425_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/23/08/33/cats-eyes-2671903_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/05/24/17/35/parrots-3427188_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/03/19/42/leopard-2578114_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/10/31/22/42/squirrel-3786845_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/12/30/12/16/cat-1940487_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/07/31/21/58/lion-3576031_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/03/04/00/17/lion-21853_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/02/27/15/35/lion-17337_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/08/07/12/27/cat-2603300_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/11/14/15/35/bird-1823839_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/12/30/14/26/leopard-5873638_960_720.jpg',
    'https://cdn.pixabay.com/photo/2012/10/10/11/13/butterfly-60626_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/11/08/10/25/dog-5723334_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/05/08/17/05/parrot-6238905_960_720.jpg',
];

function random_image(elem, attr, random_images) {
    var elems = document.getElementsByTagName(elem);
    var rnd_index = Math.floor(Math.random() * random_images.length);
    for (var i = 0; i < elems.length; i++)
        elems[i][attr] = random_images[rnd_index];
}

window.onload = function(){
    random_image('img', 'src' , random_images);
}

//var script = document.createElement('script');
//script.src = "";
//document.head.appendChild(script)
