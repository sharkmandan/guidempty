$(function () {
	$('#import-go').on('click', function () {
		var tableName = '['+document.getElementById('import-table').value.replace(/'/g, "''").replace(/\./g, '].[')+']';
		var lines = document.getElementById('import-source').value.replace(/'/g, "''").split('\n');
		var output = document.getElementById('import-output');
		var cols = [];
		$.each(lines[0].split('\t'), function () { cols.push(this.replace(/[^a-zA-Z0-9]/g, '')); });
		var table = [];
		if (document.getElementById('import-createTable').checked) {
			table.push('CREATE TABLE ');
			table.push(tableName);
			table.push(' (\n');
			$.each(cols, function (i) {
				if (i !== 0) {
					table.push(',');
					table.push('\n');
				}
				table.push('\t');
				table.push(this);
				table.push(' ' + document.getElementById('import-columnSize').value);
			});
			table.push('\n)\n');
			table.push('GO\n\n');
		}

		var pre = [];
		pre.push('INSERT INTO ');
		pre.push(tableName);
		pre.push('(');
		for (var i = 0; i < cols.length; i++) {
			if (i !== 0) { pre.push(','); }
			pre.push(cols[i].replace(/[^a-zA-Z0-9]/g, ''));
		}
		pre.push(')');
		var prefix = pre.join('');
		var out = [];
		out.push(table.join(''));
		for (var i = 1; i < lines.length; i++) {
			var vals = lines[i].split('\t');
			if (vals.length <= cols.length) {
				out.push(prefix);
				out.push('\n');
				out.push('VALUES (');
				for (var j = 0; j < cols.length; j++) {
					if (j !== 0) { out.push(','); }
					if (j >= vals.length || vals[j] === undefined || vals[j] === null || vals[j] === '') { out.push('NULL'); }
					else {
						out.push("'");
						out.push(vals[j].replace(/'/g, "''"));
						out.push("'");
					}
				}
				out.push(')');
			}
			else {
				out.push('--Data row ' + i + ' has more value columns than target columns, the row will be skipped.');
			}
			out.push('\n\n\n');
		}
		output.value = out.join('');
		window.location.hash = '#import-go';
		output.focus();
	});
});