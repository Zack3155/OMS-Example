import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "src/services/utils/hooks/useSelector";

export default function useCustomUpload({ configure_info, actions }) {
	const dispatch = useAppDispatch();
	const { t } = useTranslation<any>(["translation", "common"]);

	const [fileList, setFileList] = useState([]);
	const [customExisted, setCustomExisted] = useState<boolean>(false);

	const onDeleteCustomDesign = () => {
		setCustomExisted(false);
		const product_gallery_list = [
			{
				original: "",
				pic_template_id: "",
				img_id: "0",
			},
		];
		dispatch(
			actions.setConfigure({
				...configure_info,
				product_gallery_list,
			})
		);
		dispatch(
			actions.setTemplate({
				id: 0,
				url: "",
				img_id: "0",
			})
		);
		dispatch(actions.setHasEdited(false));
	};

	const onSubmitCustomDesign = () => {
		setCustomExisted(true);
		const url = fileList[0].response.url;
		const product_gallery_list = [
			{
				original: url,
				pic_template_id: 0,
				img_id: "-1",
			},
		];
		dispatch(
			actions.setConfigure({
				...configure_info,
				product_gallery_list,
			})
		);
		dispatch(
			actions.setTemplate({
				url,
				id: 0,
				img_id: "-1",
			})
		);
		dispatch(actions.setHasEdited(true));
		// message.success(t("upload_success_hint"));
	};

	useEffect(() => {
		if (!fileList.length && customExisted) onDeleteCustomDesign();
		else if (fileList[0]?.status === "done") onSubmitCustomDesign();
		// else if (fileList[0]?.status === "error")
		// 	message.error(t("upload_fail_hint"));
	}, [fileList]);
	console.log({ fileList, customExisted });

	return { fileList, setFileList };
}
