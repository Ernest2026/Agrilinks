const Report = require("../models/report");

const reportController = {
  get: ({ query: { reportID } }, res) => {
    const aggregatedReport = {};
    const aggregateVal = (arr, report) =>
      arr.map((val) =>
        !aggregatedReport[val]
          ? (aggregatedReport[val] = report[val])
          : aggregatedReport[val].indexOf(report[val]) === -1 &&
            (aggregatedReport[val] = [aggregatedReport[val], report[val]])
      );

    const sumUpPrice = (report) => {
      var priceInKg = report["price"] / report["convFctr"];
      !aggregatedReport["price"]
        ? (aggregatedReport["price"] = priceInKg)
        : (aggregatedReport["price"] += priceInKg);
    };

    Report.find({ id: reportID }, (err, data) => {
      err && res.json({ status: "error", message: err.message });
      data.map((report, index) => {
        aggregateVal(
          ["id", "cmdtyName", "cmdtyID", "marketID", "marketName", "userID"],
          report
        );
        aggregatedReport["timestamp"] = Date.now();
        aggregatedReport["priceUnit"] = "Kg";
        sumUpPrice(report);
      });
      aggregatedReport["price"] = aggregatedReport["price"] / data.length;
      res.json(aggregatedReport);
    });
  },
  post: ({ body: { reportDetails } }, res) => {
    const newReport = new Report(reportDetails);
    newReport.save((err, data) =>
      err
        ? res.json({ status: "error", message: err.message })
        : res.json({ status: "success", reportId: data.id })
    );
  },
};

module.exports = reportController;
