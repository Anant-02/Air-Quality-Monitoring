import React, { useState, useEffect } from "react";

function Carbon() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetch(
					"https://api.thingspeak.com/channels/2048618/feeds.json?results=10"
				);
				const data = await result.json();
				setData(data.feeds);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Carbon Data</h1>
			<div>
				<iframe
                    title="ThingSpeakGraph"
					width="450"
					height="260"
					src="https://thingspeak.com/channels/2048618/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
				></iframe>
			</div>
			<div className="container outter">
				<table>
					<thead>
						<tr>
							<th>Created At</th>
                            <th></th>
							<th>Ozone(ppm)</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item.entry_id}>
								<td>{item.created_at}</td>
                                <td>____________</td>
								<td>{item.field1}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Carbon;
