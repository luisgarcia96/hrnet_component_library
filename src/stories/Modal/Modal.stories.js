import { Modal } from "../../../lib/components/Modal/Modal";

export default {
	title: "Example/Modal",
	component: Modal,
	//add a description to the component

	parameters: {
		layout: "none",
	},
	tags: ["autodocs"],
};

export const Default = {
	args: {
		isOpen: true,
		onClose: () => console.log("Close modal"),
		message: "This is a modal",
	},
};
