
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#holdTable').bootstrapTable({
            url: '/invest/holdOnHolds',    //请求后台的URL（*）
            method: 'get',                     //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [5, 10, 20],              //可供选择的每页的行数（*）
            strictSearch: false,
            clickToSelect: false,                //是否启用点击选中行
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            showColumns: true,
            showRefresh: true,
            showExport: true,
            showPaginationSwitch: true,
            detailView: true,
            responseHandler: responseHandler,
            detailFormatter: detailFormatter,
            columns: [
                {
                    title: '品种',
                    field: 'name',
                },
                {
                    title: '方向',
                    field: 'direction',
                    formatter: directionFormatter,
                },
                {
                    title: '持仓数量',
                    field: 'currentNum',
                    formatter: currentNumFormatter,
                },
                {
                    title: '持仓均价',
                    field: 'currentPrice',
                },
                {
                    title: '已平仓利润',
                    field: 'profit',
                    formatter: profitFormatter,
                },
                {
                    title: '银行买入价',
                    field: 'buy',
                    formatter: buyFormatter,
                },
                {
                    title: '银行卖出价',
                    field: 'sell',
                    formatter: sellFormatter,
                },
                {
                    title: '更新时间',
                    field: 'updatedAt',
                },
                {
                    title: '实时利润',
                    field: 'virtualProfit',
                    formatter: profitFormatter,
                },
            ]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            userId: Number(Cookies.get("user_id")),
            status: 0,
        };
        return temp;
    };
    return oTableInit;
};

var MarketTableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#marketTable').bootstrapTable({
            url: '/market/current',    //请求后台的URL（*）
            method: 'get',                     //请求方式（*）
            toolbar: '#toolbarMarket',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                       //初始化加载第一页，默认第一页
            pageSize: 15,                       //每页的记录行数（*）
            pageList: [5, 10, 20],              //可供选择的每页的行数（*）
            strictSearch: false,
            clickToSelect: false,                //是否启用点击选中行
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            showColumns: true,
            showRefresh: true,
            showExport: true,
            showPaginationSwitch: true,
            detailView: true,
            responseHandler: responseHandler,
            detailFormatter: detailFormatter,
            columns: [
                {
                    title: '品种',
                    field: 'code',
                },
                {
                    title: '名称',
                    field: 'name',
                },
                {
                    title: '银行买入价',
                    field: 'buy',
                    formatter: buyFormatter,
                },
                {
                    title: '银行卖出价',
                    field: 'sell',
                    formatter: sellFormatter,
                },
                {
                    title: '更新时间',
                    field: 'updatedTime',
                    formatter: marketTimeFormatter,
                },
            ]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
        };
        return temp;
    };
    return oTableInit;
};

// 处理ajax返回的数据
function responseHandler(res) {
    return res;
}

function directionFormatter(value) {
    if (value == 0 ) {
        return "<span style='color: red;'>做多</span>";
    } else {
        return "<span style='color: green;'>做空</span>";
    }
}

function getSpanByValue(value) {
    if (value > 0 ) {
        return "<span style='color: red;'>" + value + "</span>";
    } else if (value < 0) {
        return "<span style='color: green;'>" + value + "</span>";
    } else {
        return "<span>" + value + "</span>";
    }
}

function currentNumFormatter(value) {
    return getSpanByValue(value);
}

function profitFormatter(value) {
    return getSpanByValue(parseInt(value));
}

function recordsFormatter(value) {
    const records = JSON.parse(value);
    const html = [];
    $.each(records, (index, record) => {
        // console.log(record);
        var operType;
        if(record.operType == 0) {
            operType = "<span style='color: red;'>开仓</span>";;
        } else {
            operType = "<span style='color: green;'>平仓</span>";;
        }
        var currentNum = record.currentNum;
        var currentPrice = record.currentPrice;
        var currentProfit = parseInt(record.currentProfit);
        var operTime = record.operTime;
        var operNum = record.operNum;
        var operPrice = record.operPrice;
        var profit = parseInt(record.operProfit);
        var operProfit = Math.abs(profit);
        var profitType;
        if (profit >= 0) {
            profitType = `<span style='color: red;'>盈利${operProfit}</span>`;
        } else {
            profitType = `<span style='color: green;'>亏损${operProfit}</span>`;
        }

        html.push(`<p>${operTime} ：原有数量${currentNum}，均价${currentPrice}，利润${currentProfit} => ${operType}数量${operNum}，均价${operPrice}，${profitType}</p>`);
    });
    return "<p>操作记录：</p>" + html.join(' ');
}

function detailFormatter(index, row) {
    return recordsFormatter(row.records);
}

function marketTimeFormatter(value) {
    return value.substr(0, value.lastIndexOf(".")).replace("T"," ");
}

function buyFormatter(value) {
    return `<span style='color: green;'>${value}</span>`;
}

function sellFormatter(value) {
    return `<span style='color: red;'>${value}</span>`;
}

function refreshHoldData() {
    $('#holdTable').bootstrapTable('refresh', {silent: true});
}

function refreshMarketData() {
    $('#marketTable').bootstrapTable('refresh', {silent: true});
}

var watcherStatus = true;
var watcherTimer;

var marketStatus = true;
var marketTimer;

$(function () {
    var oTable = new TableInit();
    oTable.Init();
    var oMarketTable = new MarketTableInit();
    oMarketTable.Init();
    // 防止height问题
    $(window).resize(function () {
        $('#holdTable').bootstrapTable('resetView');
    });
    $(window).resize(function () {
        $('#marketTable').bootstrapTable('resetView');
    });
    $('#watcher').click(function () {
        if(watcherStatus) {
            $('#watcher').text("暂停监控");
            watcherTimer = setInterval('refreshHoldData()', 1000);
            watcherStatus = false;
        } else {
            $('#watcher').text("开始监控");
            clearInterval(watcherTimer);
            watcherStatus = true;
        }
    })
    $('#watcherMarket').click(function () {
        if(marketStatus) {
            $('#watcherMarket').text("暂停监控");
            marketTimer = setInterval('refreshMarketData()', 1000);
            marketStatus = false;
        } else {
            $('#watcherMarket').text("开始监控");
            clearInterval(marketTimer);
            marketStatus = true;
        }
    })

});
















