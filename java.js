// sum code written by me - Coderxaron ._.

//vars:
const gagt = document.getElementById("gagt")
const pvbt = document.getElementById("pvbt")
const forget = document.getElementById("forget")
const bst = document.getElementById("bst")

const oldgag = document.getElementById("oldgag")
const oldpvb = document.getElementById("oldpvb")
const oldforge = document.getElementById("oldforge")
const oldbs = document.getElementById("oldbs")

const last_sync_display = document.getElementById("ls")
const datastore = "https://raw.githubusercontent.com/coderxaron/data/main/data/2026-02.json"

window.onload = async () => {
  //get Group Data from Vercel since cros acsess doesnt work ._.
  const gag_g = await fetch("https://backend-tester-view.vercel.app/api/group?id=35789249").then(r => r.json());
  const pvb_g = await fetch("https://backend-tester-view.vercel.app/api/group?id=34869880").then(r => r.json());
  const forge_g = await fetch("https://backend-tester-view.vercel.app/api/group?id=35489258").then(r => r.json());
  const bs_g = await fetch("https://backend-tester-view.vercel.app/api/group?id=193446929").then(r => r.json());

  // Load Tester Amount from the Role
  const gagm = gag_g.roles.find(r => r.id === 350564035).memberCount;
  const pvbm = pvb_g.roles.find(r => r.id === 532762007).memberCount;
  const forgem = forge_g.roles.find(r => r.id === 269434048).memberCount;
  const bsm = bs_g.roles.find(r => r.id === 606510073).memberCount;


  //Display Live Counts
  gagt.textContent = `GAG Testers: ${gagm}`;
  pvbt.textContent = `PVB Testers: ${pvbm}`;
  forget.textContent = `Forge Testers: ${forgem}`;
  bst.textContent = `Brainrot Seas Testers: ${bsm}`;
  
  // gET data
  
  async function loadLatestData() {
    const data = await fetch(datastore).then(r => r.json());
    // newest entry ik really peak
    return data[data.length - 1];
  }

  const newest_data = await loadLatestData();

  let gag_ = newest_data.gag;
  let pvb_ = newest_data.pvb;
  let forge_ = newest_data.forgeQA;
  let bs_ = newest_data.brainTester;
  
  let t_ = newest_data.timestamp;

  const last_sync = t_;
  const PVBTESTERS = pvb_;
  const GAGTESTERS = gag_;
  const FORGETESTERS = forge_;
  const BSTESTERS = bs_;

  last_sync_display.textContent = `Old Data from: ${last_sync}`;
  
  // Display CHanges if there are 
  if (pvbm === PVBTESTERS) { oldpvb.style.color = "orange"; oldpvb.textContent = PVBTESTERS + " ="; }
  if (pvbm > PVBTESTERS) { oldpvb.style.color = "green"; oldpvb.textContent = "+" + (pvbm - PVBTESTERS) + " ↑"; }
  if (pvbm < PVBTESTERS) { oldpvb.style.color = "red"; oldpvb.textContent = "-" + (PVBTESTERS - pvbm) + " ↓"; }

  if (gagm === GAGTESTERS) { oldgag.style.color = "orange"; oldgag.textContent = GAGTESTERS + " ="; }
  if (gagm > GAGTESTERS) { oldgag.style.color = "green"; oldgag.textContent = "+" + (gagm - GAGTESTERS) + " ↑"; }
  if (gagm < GAGTESTERS) { oldgag.style.color = "red"; oldgag.textContent = "-" + (GAGTESTERS - gagm) + " ↓"; }

  if (forgem === FORGETESTERS) { oldforge.style.color = "orange"; oldforge.textContent = FORGETESTERS + " ="; }
  if (forgem > FORGETESTERS) { oldforge.style.color = "green"; oldforge.textContent = "+" + (forgem - FORGETESTERS) + " ↑"; }
  if (forgem < FORGETESTERS) { oldforge.style.color = "red"; oldforge.textContent = "-" + (FORGETESTERS - forgem) + " ↓"; }
  
  if (bsm === BSTESTERS) { oldbs.style.color = "orange"; oldbs.textContent = BSTESTERS + " ="; }
  if (bsm > BSTESTERS) { oldbs.style.color = "green"; oldbs.textContent = "+" + (bsm - BSTESTERS) + " ↑"; }
  if (bsm < BSTESTERS) { oldbs.style.color = "red"; oldbs.textContent = "-" + (BSTESTERS - bsm) + " ↓"; }

};
