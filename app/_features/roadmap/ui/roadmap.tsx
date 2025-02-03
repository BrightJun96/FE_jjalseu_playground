"use client";

import { GetRoadmapResponse } from "@/app/_entities/roadmap/get-roadmap.response";
import useCenterWindow from "@/app/_features/roadmap/hook/useCenterWindow";
import dynamic from "next/dynamic";
import React from "react";

const Tree = dynamic(() => import("react-d3-tree"), {
    ssr: false,
});

const RoadmapTree = ({
    roadmap,
}: {
    roadmap: GetRoadmapResponse;
}) => {
    const dimensions = useCenterWindow();

    interface TreeNode extends GetRoadmapResponse {
        name: string;
        children: TreeNode[];
    }
    function convertToTreeData(
        node: GetRoadmapResponse,
    ): TreeNode {
        return {
            ...node,
            name: node.title, // title을 name으로 변환
            children: node.children
                ? node.children.map(convertToTreeData)
                : [], // 재귀 호출
        };
    }

    const treeData = convertToTreeData(roadmap);
    const handleNodeClick = (nodeDatum: TreeNode) => {};
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Tree
                data={treeData}
                orientation="vertical"
                translate={{
                    x: dimensions.width / 2,
                    y: dimensions.height / 4,
                }}
                onNodeClick={handleNodeClick} // 클릭 이벤트 추가
            />
        </div>
    );
};

export default RoadmapTree;
