const linksNaarFotos = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/462030/pexels-photo-462030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.unsplash.com/photo-1527555197883-98e27ca0c1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg',
  'https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG',
  'https://ichef.bbci.co.uk/news/410/cpsprodpb/E427/production/_110370485_cd1ab757-0600-4936-86dd-7437ad543316.jpg',
  'https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae',
  'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg',
  'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340',
  'https://www.helsinkitimes.fi/images/2019/Dec/TIP15-1.jpg',
  'https://images.befunky.com/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=format&fm=jpg&q=75&w=1184&ixlib=js-1.4.1',
  'https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-hapenny-bridge-dublin.jpg',
  'https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://msf-media.imgix.net/Docs/MSF/Media/CMS3/e/c/9/a/MSF294717.jpg',
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/7FF7/production/_109195723_curtiswhiteside.jpg',
  'https://www.insidescience.org/sites/default/files/3_crop_lighthousesupernova.jpg',
  'https://static01.nyt.com/images/2020/01/10/world/10oz-fires-photos1/10oz-fires-mobileMasterAt3x-v2.jpg',
  'https://cdn.airplane-pictures.net/images/uploaded-images/2020/2/24/1282257s.jpg'
];

const houder = document.getElementById('container');

function plaatsEenFoto(url) {
  let item = document.createElement('div');
  item.className = 'item';
  let deFoto = document.createElement('img');
  deFoto.src = url;
  deFoto.alt = 'Fotos';
  item.append(deFoto);
  houder.append(item);
}


for(let i=linksNaarFotos.length; i>0; i--) {
  let getalletje = Math.floor(Math.random()*linksNaarFotos.length);
  plaatsEenFoto( linksNaarFotos[getalletje] );
  linksNaarFotos.splice(getalletje,1);
}
