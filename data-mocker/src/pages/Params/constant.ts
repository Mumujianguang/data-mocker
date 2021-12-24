import { CommonlyUsedNumberType, CommonlyUsedStringType, FieldType, RuleType } from "./index.d"

// 字段默认名称
export const DEFAULT_NAME = 'default';

// 字段类型
export const Fields = [
    {
        label: '字符串',
        value: FieldType.string
    },
    {
        label: '数字',
        value: FieldType.number
    }
]

// 规则类型
export const Rules = [
    {
        label: '常用',
        value: RuleType.commonlyUsed
    },
    {
        label: '自定义',
        value: RuleType.custom
    }
]

// 常用字段类型
export const CommonlyUsedString = [
    {
        label: '姓名',
        value: CommonlyUsedStringType.name
    },
    {
        label: '姓别',
        value: CommonlyUsedStringType.sex
    }
]

// 常用数字类型
export const CommonlyUsedNumber = [
    {
        label: '身份证',
        value: CommonlyUsedNumberType.id
    },
    {
        label: '斐波那契数列',
        value: CommonlyUsedNumberType.fibonacci
    }
]

/**
 * 获取默认字段配置
 * @returns 
 */
export const getDefaultField = () => ({
    name: DEFAULT_NAME,
    type: FieldType.string,
    ruleType: RuleType.commonlyUsed,
    ruleConfig: {
        type: CommonlyUsedStringType.name
    }
})