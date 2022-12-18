import * as React from "react";
import { LinearProgress } from "@mui/material";

export default function ProgressBar() {
	return (
		<div>
			<LinearProgress value={10} />
		</div>
	);
}
