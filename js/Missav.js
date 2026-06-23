var rule = {
    title: 'MissAV',
    host: 'https://missav.ai',
    url: '/cn/fyclass?page=fypage',
    searchUrl: '/cn/search/**?page=fypage',
    searchable: 1,
    quickSearch: 1,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
        'Referer': 'https://missav.ai/'
    },
    timeout: 10000,
    class_name: '最近更新&新作上市&中文字幕&无码流出&SIRO&LUXU&GANA&PRESTIGE&S-CUTE&ARA&FC2&麻豆传媒&本月热门',
    class_url: 'new&release&chinese-subtitle&uncensored-leak&siro&luxu&gana&maan&scute&ara&fc2&madou&monthly-hot',
    limit: 6,
    play_parse: true,
    lazy: $js.toString(() => {
        input = {
            parse: 1,
            jx: 0,
            url: input,
            header: {
                'User-Agent': MOBILE_UA,
                'Referer': HOST + '/'
            }
        };
    }),
    一级: '.thumbnail;img&&alt;img&&data-src;.absolute.bottom-1&&Text;a&&href',
    二级: '*',
    搜索: '.thumbnail;img&&alt;img&&data-src;.absolute.bottom-1&&Text;a&&href'
};
