const milestoneData = JSON.parse(data).data;

function loadMilestones() {
    const milestones = document.querySelector('.milestones');

    milestones.innerHTML = `${milestoneData.map(function (milestone) {
        return `<div class="milestones">
        <div class="milestone border-b">
          <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick="openMilestone(this , ${milestone._id})">
              <p>
                ${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
              </p>
            </div>
          </div>
          <div class="hidden_panel">
            ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
        }).join('')}
          </div>
        </div>
      </div>`
    }).join('')}`
}

function openMilestone(milestoneElement , id){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector('.show');
    const active = document.querySelector(".active");

    if(!milestoneElement.classList.contains("active") && active){
        active.classList.remove("active");
    }

    milestoneElement.classList.toggle("active");

    if(!currentPanel.classList.contains('show') && shownPanel){

        shownPanel.classList.remove('show');
    }
    

    currentPanel.classList.toggle('show');

    showMilestone(id)
}

function showMilestone(id){
  const milestoneImage = document.querySelector('.milestoneImage');
  const name = document.querySelector('.title');
  const details = document.querySelector('.details');
  milestoneImage.src = milestoneData[id].image;
  name.innerText = milestoneData[id].name;
  details.innerText = milestoneData[id].description;
}

loadMilestones()