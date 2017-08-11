var pieChart = function pc() {

    /**
     * non-configurable properties
     */
    var arcObject,
        chartInitialized = false,
        chartTranslateX,
        chartTranslateY,
        gPie,
        pieLayout,
        svg;

    /**
     * configurable properties
     */
    var canvasHeight = 500,
        canvasWidth = 500,
        colorScale = d3.scale.category20(),
        dataMetric = 'value',
        graphData = [],
        innerRadius = 0,
        margins = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        },
        outerRadius;

    function draw() {
        if (graphData !== undefined) {
            preDraw();
            handleArcs();
        }
    }

    function preDraw() {
        if (outerRadius === undefined) {
            outerRadius = calcRadius();
        }

        chartTranslateX = Math.floor(canvasWidth / 2);
        chartTranslateY = Math.floor(canvasHeight / 2);

        arcObject = d3.svg.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);
    }

    function handleArcs() {
        pieLayout.value(function(d) {
            return d[dataMetric];
        });

        gPie.attr('transform', 'translate(' + chartTranslateX + ',' + chartTranslateY + ')');

        var arcSelection = gPie.selectAll('.arc')
            .data(pieLayout(graphData));

        arcSelection.exit().remove();

        // append new arcs
        var newArcs = arcSelection.enter()
            .append('g')
            .attr('class', 'arc')
            .on('mouseover', function(d, i) {
                d3.select(this).selectAll('path')
                    .style('stroke', 'black')
                    .attr('transform', 'scale(1.05)');
            })
            .on('mouseout', function(d, i) {
                d3.select(this).selectAll('path')
                    .style('stroke', 'white')
                    .transition()
                    .duration(500)
                    .attr('transform', 'scale(1)')
                    .ease('bounce');
            });

        // append paths to new arcs
        newArcs.append('path')
            .style('fill', 'none')
            .attr('d', d3.svg.arc().outerRadius(0).innerRadius(0));

        // bind data and transition paths
        gPie.selectAll('.arc path')
            .data(pieLayout(graphData))
            .transition()
            .duration(250)
            .style('fill', function(d, i) {
                return colorScale(i);
            })
            .style('stroke', '#fff')
            .style('stroke-width', 1)
            .attr('d', arcObject);
    }

    function calcRadius() {
        var ch = canvasHeight - margins.top - margins.bottom,
            cw = canvasWidth - margins.left - margins.right;

        return Math.min(cw, ch) / 2;
    }

    function exports(_selection) {
        _selection.each(function(_data) {
            graphData = _data;
            draw();
        });
    }

    exports.canvasHeight = function(ch) {
        if (!arguments.length) { return canvasHeight; }
        canvasHeight = parseInt(ch);
        outerRadius = undefined;
        return this;
    };

    exports.canvasWidth = function(cw) {
        if (!arguments.length) { return canvasWidth; }
        canvasWidth = parseInt(cw);
        outerRadius = undefined;
        return this;
    };

    exports.colorScale = function(cs) {
        if (!arguments.length) { return colorScale; }
        if (cs !== undefined) {
            colorScale = cs;
        };
        return this;
    };

    exports.dataMetric = function(dm) {
        if (!arguments.length) { return dataMetric; }
        if (dm !== undefined) {
            dataMetric = dm;
        }
        return this;
    };

    exports.graphData = function(gd) {
        if (!arguments.length) { return graphData; }
        if (gd !== undefined) { graphData = gd; }
        return this;
    };

    exports.initChart = function(el) {
        if (!chartInitialized) {
            svg = d3.select(el)
                .append('svg')
                .attr('width', canvasWidth)
                .attr('height', canvasHeight);

            gPie = svg.append('svg:g')
                .attr('transform', function() {
                    var x = Math.floor(canvasWidth / 2),
                        y = Math.floor(canvasHeight / 2);
                    return 'translate(' + x + ',' + y + ')';
                });

            pieLayout = d3.layout.pie()
                .sort(null)
                .value(function(d) {
                    return d[dataMetric];
                });

            chartInitialized = true;
        }

        draw();
    };

    exports.innerRadius = function(ir) {
        if (!arguments.length) { return innerRadius; }
        if (!isNaN(ir)) {
            innerRadius = ir;
        }
        return this;
    };

    exports.margins = function(marginsObj) {
        if (!arguments.length) { return margins; }
        for (var prop in marginsObj) { margins[prop] = marginsObj[prop]; }
        return this;
    };

    exports.outerRadius = function(or) {
        if (!arguments.length) { return outerRadius; }
        if (!isNaN(or)) {
            outerRadius = or;
        }
        return this;
    };

    exports.resizeChart = function(w, h) {
        outerRadius = undefined;
        canvasWidth = Math.floor(w);
        canvasHeight = Math.floor(h);

        svg.attr('width', canvasWidth).attr('height', canvasHeight);

        return this;
    };

    exports.getConfigurableProperties = function() {
        return [
            'canvasHeight',
            'canvasWidth',
            'colorScale',
            'dataMetric',
            'graphData',
            'innerRadius',
            'margins',
            'outerRadius'
        ];
    };

    return exports;
};