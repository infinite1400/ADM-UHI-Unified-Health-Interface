import styles from "./styles.module.css";

const Pages = ({ page, total, limit, setPage }) => {
	const totalPages = Math.ceil(total / limit);

	const onClick = (newPage) => {
		setPage(newPage + 1);
	};

	return (
		<div className={styles.containerP}>
			{totalPages > 0 &&
				[...Array(totalPages)].map((val, index) => (
					<button
						onClick={() => onClick(index)}
						className={
							page === index + 1
								? `${styles.page_btnP} ${styles.activeP}`
								: styles.page_btnP
						}
						key={index}
					>
						{index + 1}
					</button>
				))}
		</div>
	);
};

export default Pages;