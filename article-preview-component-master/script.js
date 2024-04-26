function alterarIcone(){
   var button = document.getElementById('share-btn');
   const share = document.getElementById('share');
   const styles = window.getComputedStyle(button);
   if (styles.backgroundColor === "rgb(203, 206, 211)")  {
   button.style.backgroundColor = "#49556B";
   button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#FFFFFF" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>';
   share.style.display = "flex";
  }
  else {
    share.style.display = "none";
    button.style.backgroundColor = "rgb(203, 206, 211)";
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6A7F98" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>';
  }
}
