export const fields = {
  id: {
    property: "id",
    label: "ID",
    schemas: {
      required: {
        value: true,
        message: "IDを入力してください",
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
        message: "表示名を入力してください",
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
        message: "パスワードを入力してください",
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
  title: {
    property: "title",
    label: "Title",
    schemas: {
      required: {
        value: true,
        message: "タイトルを入力してください",
      },
      minLength: {
        value: 3,
        message: "3文字以上で入力してください",
      },
      maxLength: {
        value: 50,
        message: "50文字以下で入力してください",
      },
    },
  },
  body: {
    property: "body",
  },
} as const;
