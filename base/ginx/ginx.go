package ginx

import (
	"net/http"
	"pandax/base/biz"
	"pandax/base/global"
	"pandax/base/model"
	"strconv"

	"github.com/gin-gonic/gin"
)

// 绑定并校验请求结构体参数  结构体添加 例如： binding:"required" 或binding:"required,gt=10"
func BindJsonAndValid(g *gin.Context, data interface{}) {
	if err := g.ShouldBindJSON(data); err != nil {
		panic(biz.NewBizErr("传参格式错误：" + err.Error()))
	}
}

// 绑定查询字符串到
func BindQuery(g *gin.Context, data interface{}) {
	if err := g.ShouldBindQuery(data); err != nil {
		panic(biz.NewBizErr(err.Error()))
	}
}

// 获取分页参数
func GetPageParam(g *gin.Context) *model.PageParam {
	return &model.PageParam{PageNum: QueryInt(g, "pageNum", 1), PageSize: QueryInt(g, "pageSize", 10)}
}

// 获取查询参数中指定参数值，并转为int
func QueryInt(g *gin.Context, qm string, defaultInt int) int {
	qv := g.Query(qm)
	if qv == "" {
		return defaultInt
	}
	qvi, err := strconv.Atoi(qv)
	biz.ErrIsNil(err, "query param not int")
	return qvi
}

// 获取路径参数
func PathParamInt(g *gin.Context, pm string) int {
	value, _ := strconv.Atoi(g.Param(pm))
	return value
}

// 文件下载
func Download(g *gin.Context, data []byte, filename string) {
	g.Header("Content-Type", "application/octet-stream")
	g.Header("Content-Disposition", "attachment; filename="+filename)
	g.Data(http.StatusOK, "application/octet-stream", data)
}

// 返回统一成功结果
func SuccessRes(g *gin.Context, data interface{}) {
	g.JSON(http.StatusOK, model.Success(data))
}

// 返回失败结果集
func ErrorRes(g *gin.Context, err interface{}) {
	switch t := err.(type) {
	case *biz.BizError:
		g.JSON(http.StatusOK, model.Error(t))
		break
	case error:
		g.JSON(http.StatusOK, model.ServerError())
		global.Log.Error(t)
		// panic(err)
		break
	case string:
		g.JSON(http.StatusOK, model.ServerError())
		global.Log.Error(t)
		// panic(err)
		break
	default:
		global.Log.Error(t)
	}
}
