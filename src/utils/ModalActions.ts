/**
 * Open a modal.
 * @param {id} - The modal Id.
 * @returns {} - none.
 */
export function openModal(id: string) {
    const modal = getModal(id);

    if (modal) {
        modal?.classList.add("show");
    }
}

/**
 * Close a modal.
 * @param {id} - The modal Id.
 * @returns {} - none.
 */
export function closeModal(id: string) {
    const modal = getModal(id);

    if (modal) {
        modal?.classList.remove("show");
    }
}

//Check and format the ID
function formatId(id: string) {
    return id.startsWith("#") ? id : "#".concat(id);
}

//Try to get the Modal element and deal with error
function getModal(id: string) {
    const modalId = formatId(id);

    try {
        const modalElement = document.querySelector(modalId);

        if (!modalElement) {
            throw `The Modal element referring to ID: "${modalId}" could not be found. Please check the provided ID.`;
        }

        return modalElement;
    } catch (error) {
        throw Error(`${error}`);
    }
}
