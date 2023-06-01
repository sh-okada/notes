export const fields = {
  id: {
    property: "id",
    label: "ID",
    schemas: {
      required: {
        value: true,
        message: "IDは必須項目です",
      },
      minLength: {
        value: 3,
        message: "3文字以上で入力してください",
      },
      maxLength: {
        value: 12,
        message: "12文字以下で入力してください",
      },
    },
  },
  name: {
    property: "name",
    label: "表示名",
    schemas: {
      required: {
        value: true,
        message: "表示名は必須項目です",
      },
      minLength: {
        value: 3,
        message: "3文字以上で入力してください",
      },
      maxLength: {
        value: 20,
        message: "20文字以下で入力してください",
      },
    },
  },
  password: {
    property: "password",
    label: "パスワード",
    schemas: {
      required: {
        value: true,
        message: "パスワードは必須項目です",
      },
      minLength: {
        value: 8,
        message: "8文字以上で入力してください",
      },
      maxLength: {
        value: 100,
        message: "100文字以下で入力してください",
      },
    },
  },
} as const;
