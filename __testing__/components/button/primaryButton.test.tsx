import PrimaryButton from "@/app/_shared/ui/used/button/primaryButton";
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

test("props로 전달한 disabled 값이 true일 때 버튼이 비활성화 상태가 되어야 한다.", () => {
    // Given
    const { getByRole } = render(
        <PrimaryButton
            color={"primary"}
            disabled={true}
        >
            버튼
        </PrimaryButton>,
    );
    const button = getByRole("button");
    // When
    // Then
    expect(button).toBeDisabled();
});
