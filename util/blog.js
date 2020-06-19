const blogBody = () => {
	return {
		contentLevel: 'parent',
		parentId: 'blogParent',
		blogContent:
			'lorem ljdshnvd vaoiuvpiuh v;iohv sjnv laskjdnvposihvpo hvpskd nvk;s odihv [oiv s;knvpsokvhas[odpihv pjvndsopv hvjs shv ashvshv sdkhv. Dsokhvphvidugvlsjbvk sdbosdgvc  dvud liuidh ugsdivg sdlij sdi d sd sduicsjkclisducvpu sdcvpsudsd8 dsv dw9yoihc puih wdph dspiuchpu gp8cfgp9wg fp98uhwd9uhcpugw pfc8.',
		comments: [
			{
				contentLevel: 'parent',
				parentId: 'blogParent',
				commentId: 'parent1',
				userId: 'Alex',
				commentBody: 'suichdoc dsaphpisdjhps uchpais',
				children: [
					{
						contentLevel: 'child',
						parentId: 'blogParent',
						commentId: 'child1',
						userName: 'alfric',
						commentBody: 'digwe ugdi ahgo weioapa udec',
					},
					{
						contentLevel: 'child',
						parentId: 'blogParent',
						commentId: 'child2',
						userName: 'alfric',
						commentBody: 'digwe ugdi ahgo weioapa udec',
					},
				],
			},
			{
				contentLevel: 'parent',
				parentId: 'blogParent',
				commentId: 'parent2',
				userId: 'Alex',
				commentBody: 'suichdoc dsaphpisdjhps uchpais',
				children: [],
			},
			{
				contentLevel: 'parent',
				parentId: 'blogParent',
				commentId: 'parent3',
				userId: 'Soon L',
				commentBody: 'sihcbascaohc p psudhco uisd cjlksdhcl.',
				children: [
					{
						contentLevel: 'child',
						parentId: 'parent3',
						commentId: 'child1',
						userName: 'Maru',
						commentBody: 'digwe ugdi ahgo weioapa udec',
					},
					{
						contentLevel: 'child',
						parentId: 'parent3',
						commentId: 'child2',
						userName: 'alfric',
						commentBody: 'digwe ugdi ahgo weioapa udec',
					},
					{
						contentLevel: 'child',
						parentId: 'parent3',
						commentId: 'child3',
						userName: 'Vasi',
						commentBody: 'digwe ugdi ahgo weioapa udec',
					},
				],
			},
		],
	};
};

module.exports = { blogBody };
