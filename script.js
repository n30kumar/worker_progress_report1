// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Ensure only one checkbox from group is checked
    const checkboxGroups = [
      ["noTimeMissed", "notReturned", "returnedToWork"]
    ];
  
    checkboxGroups.forEach(group => {
      group.forEach(id => {
        const checkbox = document.getElementById(id);
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            group.forEach(otherId => {
              if (otherId !== id) document.getElementById(otherId).checked = false;
            });
          }
        });
      });
    });
  });
  