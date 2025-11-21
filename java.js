// sum code written by me - Coderxaron ._.

//vars:
const gagt = document.getElementById("gagt")
const pvbt = document.getElementById("pvbt")
const oldgag = document.getElementById("oldgag")
const oldpvb = document.getElementById("oldpvb")
const last_sync_display = document.getElementById("ls")

window.onload = async () => {
  //get Group Data from Vercel since cros acsess doesnt work ._.
  const gag_g = await fetch("https://backend-tester-view.vercel.app/api/group?id=35789249").then(r => r.json());
  const pvb_g = await fetch("https://backend-tester-view.vercel.app/api/group?id=34869880").then(r => r.json());

  // Load Tester Amount from the Role
  const gagm = gag_g.roles.find(r => r.id === 350564035).memberCount;
  const pvbm = pvb_g.roles.find(r => r.id === 532762007).memberCount;

  //Display Live Counts
  gagt.textContent = `GAG Testers: ${gagm}`;
  pvbt.textContent = `PVB Testers: ${pvbm}`;

  // Old data
  const last_sync = "21.11.2025";
  const PVBTESTERS = 550;
  const GAGTESTERS = 2337;
  last_sync_display.textContent = `Old Data from: ${last_sync}`;

  // Display CHanges if there are 
  if (pvbm === PVBTESTERS) { oldpvb.style.color = "orange"; oldpvb.textContent = PVBTESTERS + " ="; }
  if (pvbm > PVBTESTERS) { oldpvb.style.color = "green"; oldpvb.textContent = "+" + (pvbm - PVBTESTERS) + " ↑"; }
  if (pvbm < PVBTESTERS) { oldpvb.style.color = "red"; oldpvb.textContent = "-" + (PVBTESTERS - pvbm) + " ↓"; }

  if (gagm === GAGTESTERS) { oldgag.style.color = "orange"; oldgag.textContent = GAGTESTERS + " ="; }
  if (gagm > GAGTESTERS) { oldgag.style.color = "green"; oldgag.textContent = "+" + (gagm - GAGTESTERS) + " ↑"; }
  if (gagm < GAGTESTERS) { oldgag.style.color = "red"; oldgag.textContent = "-" + (GAGTESTERS - gagm) + " ↓"; }
};
