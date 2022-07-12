function getTask(): void {
    const id: string | null | undefined = document.querySelector("div.work-item-form-id")?.textContent;
    const name: string | null | undefined = (document.querySelector("div.work-item-form-title input") as HTMLInputElement)?.value;

    if (id == null || id == undefined || name == null || name == undefined) {
        console.log("Can't find field ID or Name. Canceling.");
        return;
    }

    let formatedName = `${id}_${name?.replace(/[ -]+/g, '_')}`.toLowerCase();
    (document.querySelector("div.vc-create-branch-from-git-ref-dialog input") as HTMLInputElement).value = formatedName;
    (document.querySelector("div.vc-create-branch-from-git-ref-dialog input") as HTMLInputElement).classList.remove("invalid");

    (document.querySelector("div.vc-create-branch-from-git-ref-dialog div.input-error-tip") as HTMLElement).style.display = 'none';

    (document.querySelector("#ok") as HTMLButtonElement).classList.remove("ui-state-disabled", "ui-button-disabled");
    (document.querySelector("#ok") as HTMLButtonElement).ariaDisabled = "false";
    (document.querySelector("#ok") as HTMLButtonElement).disabled = false;
}

chrome.action.onClicked.addListener(event => {
    chrome.scripting.executeScript({ target: { tabId: event.id! }, func: getTask })
})