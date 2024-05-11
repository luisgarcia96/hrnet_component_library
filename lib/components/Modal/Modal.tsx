import React from "react";
import styles from "./Modal.module.scss";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	message: string;
}

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	message,
	...props
}) => {
	const { className, ...restProps } = props;

	if (!isOpen) return null;
	return (
		<div className={`${styles.modal} ${className}`} {...restProps}>
			<div className={styles.content}>
				<button className={styles.close} onClick={onClose}>
					X
				</button>
				<p className={styles.message}>{message}</p>
			</div>
		</div>
	);
};
