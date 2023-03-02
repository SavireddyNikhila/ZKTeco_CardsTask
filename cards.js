var text,div;

function showTigerDetails(){
    let img1=document.createElement("img");
    img1.src="https://th.bing.com/th/id/OIP.kmchKhluYSKdT4kNqqfQhgHaFj?w=213&h=180&c=7&r=0&o=5&pid=1.7";
    empty(div=document.getElementById("showImage"));
    div.appendChild(img1);

    text="The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.";
    document.getElementById("showContent").innerHTML=text;
 }
function showPolarBearDetails(){
   
    let img2=document.createElement("img");
    img2.src="https://th.bing.com/th/id/OIP.etUApVg3MvdfjexmfklC5wHaE-?w=242&h=180&c=7&r=0&o=5&pid=1.7";
    empty(div=document.getElementById("showImage"));
    div.appendChild(img2);

    text="The polar bear (Ursus maritimus) is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses, this includes the most northern regions of North America and Eurasia. It is the largest extant bear species, as well as the largest extant land carnivore. A boar (adult male) weighs around 350 kg, while a sow (adult female) is about half that size. Although it is the sister species of the brown bear, it has evolved to occupy a narrower ecological niche, with many body characteristics adapted for cold temperatures, for moving across snow, ice and open water, and for hunting seals, which make up most of its diet. Although most polar bears are born on land, they spend most of their time on the sea ice.Polar bears hunt their preferred food of seals from the edge of sea ice, often living off fat reserves when no sea ice is present. Because of their dependence on the sea ice, polar bears are classified as marine mammals.";
    document.getElementById("showContent").innerHTML=text;
    
}
function showCatDetails(){
    
    let img3=document.createElement("img");
    img3.src="https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?w=277&h=185&c=7&r=0&o=5&pid=1.7";
    empty(div=document.getElementById("showImage"));
    div.appendChild(img3);

    text="The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.Cats are commonly kept as house pets but can also be farm cats or feral cats; the feral cat ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries.";
    document.getElementById("showContent").innerHTML=text;
}
function showDogDetails(){
   
    let img4=document.createElement("img");
    img4.src="https://th.bing.com/th/id/OIP.rhJ3ATG6kZ6lCE6BSUzLsQHaFc?w=252&h=185&c=7&r=0&o=5&pid=1.7";
    empty(div=document.getElementById("showImage"));
    div.appendChild(img4);

    text="The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture. Due to their long association with humans, dogs have expanded to a large number of domestic individuals and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.";
    document.getElementById("showContent").innerHTML=text;
}
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }

