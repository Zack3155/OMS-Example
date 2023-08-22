export enum ModalVisibility {
	Disable = 0,
	Login,
	SaveCard,
	Terms,
}

export interface PanesItemProps {
	title: string;
	content: JSX.Element;
	key: string;
	closable: boolean;
	path: string;
}
